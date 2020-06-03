import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import * as grpc from 'grpc';
import * as ripple from 'ripple-lib';
import * as transaction_grpc_pb from '../proto/rippleapi/transaction_grpc_pb';
import * as transaction_pb from '../proto/rippleapi/transaction_pb';
import { enumTransactionTypeString } from './enum';

// this document may be useful
// https://qiita.com/aanrii/items/699b4cda0babb3f47a2f

interface transaction {
  TransactionType: string;
  Account: string;
  Amount: string;
  Destination: string;
}

interface resSubmitTransaction {
  resJSON: any;
  earlistLedgerVersion: number;
}

interface resGetTransaction {
  txJSON: string;
  errMessage: string;
}

export class RippleTransactionAPIService implements transaction_grpc_pb.IRippleTransactionAPIServer {
  private rippleAPI: ripple.RippleAPI;

  // public constructor(wsURL: string) {
  //   this.rippleAPI = new ripple.RippleAPI({server: wsURL});
  //   this.rippleAPI.connect();
  // }
  public constructor(rippleAPI: ripple.RippleAPI) {
    this.rippleAPI = rippleAPI;
  }

  private async _prepareTransaction(call: grpc.ServerUnaryCall<transaction_pb.RequestPrepareTransaction>) : Promise<string> {
    console.log("_prepareTransaction()");

    const txType = call.request.getTxType();
    // console.log(instructions);
    // console.log(instructions?.getMaxledgerversionoffset());

    const preparedTx = await this.rippleAPI.prepareTransaction({
      "TransactionType": enumTransactionTypeString[txType],
      "Account": call.request.getSenderaccount(),
      "Amount": this.rippleAPI.xrpToDrops(call.request.getAmount().toString()),
      "Destination": call.request.getReceiveraccount(),      
    }, {});
    //console.log("preparedTx", preparedTx);
    return preparedTx.txJSON;
  }

  private async _submitTransaction(call: grpc.ServerUnaryCall<transaction_pb.RequestSubmitTransaction>) : Promise<resSubmitTransaction> {
    console.log("_submitTransaction()");

    const latestLedgerVersion = await this.rippleAPI.getLedgerVersion();
    const txBlob = call.request.getTxblob();
    const resJSON = await this.rippleAPI.submit(txBlob);
    console.log("Tentative result code:", resJSON.resultCode);
    console.log("Tentative result message:", resJSON.resultMessage);  
    
    return { resJSON: resJSON, earlistLedgerVersion: latestLedgerVersion + 1 };
  }

  // Ledger History
  // https://xrpl.org/ledger-history.html
  private async _getTransaction(call: grpc.ServerUnaryCall<transaction_pb.RequestGetTransaction>) : Promise<resGetTransaction> {
    console.log("_getTransaction()");

    let txJSON: string = "";
    let errMessage: string = "";
    try {
      const txID = call.request.getTxid();
      const earliestLedgerVersion = call.request.getMinledgerversion();

      const tx = await this.rippleAPI.getTransaction(txID, {minLedgerVersion: earliestLedgerVersion});
      console.log("Transaction result:", tx.outcome.result);
      console.log("Balance changes:", JSON.stringify(tx.outcome.balanceChanges));
      txJSON = JSON.stringify(tx);
    } catch(error) {
      console.log("Couldn't get transaction outcome:", error);
      // MissingLedgerHistoryError: Server is missing ledger history in the specified range
      // NotFoundError: Transaction has not been validated yet; try again later
      // NotFoundError: Transaction not found
      errMessage = error;
    }
    
    return {txJSON: txJSON, errMessage: errMessage}
  }

  // prepareTransaction handler
  prepareTransaction = (
    call: grpc.ServerUnaryCall<transaction_pb.RequestPrepareTransaction>,
    callback: grpc.sendUnaryData<transaction_pb.ResponsePrepareTransaction>,
  ) : void => {
    console.log("[prepareTransaction] is called");

    // call API as async
    this._prepareTransaction(call).then(resJSON => {
      const txJSON = JSON.stringify(resJSON);
      //console.log("txJSON", txJSON);

      // response
      const res = new transaction_pb.ResponsePrepareTransaction();
      res.setTxjson(txJSON);
      callback(null, res);
    })
  }

  // signTransaction handler
  // https://xrpl.org/rippleapi-reference.html#offline-functionality
  signTransaction = (
    call: grpc.ServerUnaryCall<transaction_pb.RequestSignTransaction>,
    callback: grpc.sendUnaryData<transaction_pb.ResponseSignTransaction>,
  ) : void => {
    console.log("[signTransaction] is called");
  
    // call API
    const signed = this.rippleAPI.sign(call.request.getTxjson(), call.request.getSecret());
    console.log("txID: Identifying hash:", signed.id);
    console.log("txBlob: Signed blob:", signed.signedTransaction);
  
    // response
    const res = new transaction_pb.ResponseSignTransaction();
    res.setTxid(signed.id);
    res.setTxblob(signed.signedTransaction);
    callback(null, res);
  }

  // submitTransaction handler
  submitTransaction = (
    call: grpc.ServerUnaryCall<transaction_pb.RequestSubmitTransaction>,
    callback: grpc.sendUnaryData<transaction_pb.ResponseSubmitTransaction>,
  ) : void => {
    console.log("[submitTransaction] is called");

    // call API as async
    this._submitTransaction(call).then(resAPI => {
      const resJSON = JSON.stringify(resAPI.resJSON);
      console.log("resJSON", resJSON);
      console.log("earlistLedgerVersion", resAPI.earlistLedgerVersion);

      // response
      const res = new transaction_pb.ResponseSubmitTransaction();
      res.setResultjsonstring(resJSON);
      res.setEarliestledgerversion(resAPI.earlistLedgerVersion);
      callback(null, res);
    })
  }

  // waitValidation as server streaming
  waitValidation = (call: grpc.ServerWritableStream<Empty>,
  ) : void => {
    console.log("[waitValidation] is called");

    const ledgerHandler = (ledger: any) => {
      if (call.cancelled) {
        console.log("canceled");
        call.end();
        this.rippleAPI.removeListener('ledger', ledgerHandler);
        return;
      }

      console.log("Ledger version", ledger.ledgerVersion, "was just validated.", call.cancelled);
      // response
      const res = new transaction_pb.ResponseWaitValidation();
      res.setLedgerversion(<number>ledger.ledgerVersion);
      call.write(res);
    }
    this.rippleAPI.on('ledger', ledgerHandler);
    // this.rippleAPI.on('ledger', ledger => {
    //   console.log("Ledger version", ledger.ledgerVersion, "was just validated.");
    //   // if (ledger.ledgerVersion > maxLedgerVersion) {
    //   //   console.log("If the transaction hasn't succeeded by now, it's expired")
    //   // }
    //   call.write(ledger.ledgerVersion);
    // });

    // when disconnected, remove listener
    // FIXME: this event is not called
    call.on('close', () => {
      console.log("[close] is called");
      call.end();
      this.rippleAPI.removeListener('ledger', ledgerHandler);
    });
  }

  // getTransaction handler
  getTransaction = (
    call: grpc.ServerUnaryCall<transaction_pb.RequestGetTransaction>,
    callback: grpc.sendUnaryData<transaction_pb.ResponseGetTransaction>,
  ) : void => {
    console.log("[getTransaction] is called");

    // call API as async
    this._getTransaction(call).then(resGetTx => {      
      // response
      const res = new transaction_pb.ResponseGetTransaction();
      res.setResultjsonstring(resGetTx.txJSON);
      res.setErrormessage(resGetTx.errMessage);
      callback(null, res);
    })
  }

};

// export default {
//   service: transaction_grpc_pb.RippleTransactionAPIService,  // Service interface
//   impl: new RippleTransactionAPIService(wsURL),              // Service interface definitions
// };
export const service = transaction_grpc_pb.RippleTransactionAPIService;
