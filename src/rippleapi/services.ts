import 'dotenv/config';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import * as grpc from 'grpc';
import * as ripple from 'ripple-lib';
import * as rippleapi_grpc_pb from '../proto/rippleapi/rippleapi_grpc_pb';
import * as rippleapi_pb from '../proto/rippleapi/rippleapi_pb';
import { enumTransactionTypeString } from './enum';

// this document may be useful
// https://qiita.com/aanrii/items/699b4cda0babb3f47a2f

const wsURL: string = process.env.RippleAPIURL || 'wss://s.altnet.rippletest.net:51233';

interface transaction {
  TransactionType: string;
  Account: string;
  Amount: string;
  Destination: string;
}

interface resSubmitTransaction{
  resJSON: any;
  earlistLedgerVersion: number;
}

class RippleAPIService implements rippleapi_grpc_pb.IRippleAPIServer {
  private rippleAPI: ripple.RippleAPI;

  public constructor(wsURL: string) {
    this.rippleAPI = new ripple.RippleAPI({server: wsURL});
    this.rippleAPI.connect();
  }

  private async _prepareTransaction(call: grpc.ServerUnaryCall<rippleapi_pb.RequestPrepareTransaction>) : Promise<string> {
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

  private async _submitTransaction(call: grpc.ServerUnaryCall<rippleapi_pb.RequestSubmitTransaction>) : Promise<resSubmitTransaction> {
    console.log("_submitTransaction()");

    const latestLedgerVersion = await this.rippleAPI.getLedgerVersion();
    const txBlob = call.request.getTxblob();
    const resJSON = await this.rippleAPI.submit(txBlob);
    console.log("Tentative result code:", resJSON.resultCode);
    console.log("Tentative result message:", resJSON.resultMessage);  
    
    return { resJSON: resJSON, earlistLedgerVersion: latestLedgerVersion + 1 };
  }

  // prepareTransaction handler
  prepareTransaction = (
    call: grpc.ServerUnaryCall<rippleapi_pb.RequestPrepareTransaction>,
    callback: grpc.sendUnaryData<rippleapi_pb.ResponsePrepareTransaction>,
  ) : void => {
    console.log("[prepareTransaction] is called");

    // call API as async
    this._prepareTransaction(call).then(resJSON => {
      const txJSON = JSON.stringify(resJSON);
      //console.log("txJSON", txJSON);

      // response
      const res = new rippleapi_pb.ResponsePrepareTransaction();
      res.setTxjson(txJSON);
      callback(null, res);
    })
  }

  // signTransaction handler
  signTransaction = (
    call: grpc.ServerUnaryCall<rippleapi_pb.RequestSignTransaction>,
    callback: grpc.sendUnaryData<rippleapi_pb.ResponseSignTransaction>,
  ) : void => {
    console.log("[signTransaction] is called");
  
    // call API
    const signed = this.rippleAPI.sign(call.request.getTxjson(), call.request.getSecret());
    console.log("txID: Identifying hash:", signed.id);
    console.log("txBlob: Signed blob:", signed.signedTransaction);
  
    // response
    const res = new rippleapi_pb.ResponseSignTransaction();
    res.setTxid(signed.id);
    res.setTxblob(signed.signedTransaction);
    callback(null, res);
  }

  // submitTransaction handler
  submitTransaction = (
    call: grpc.ServerUnaryCall<rippleapi_pb.RequestSubmitTransaction>,
    callback: grpc.sendUnaryData<rippleapi_pb.ResponseSubmitTransaction>,
  ) : void => {
    console.log("[submitTransaction] is called");

    // call API as async
    this._submitTransaction(call).then(resAPI => {
      const resJSON = JSON.stringify(resAPI.resJSON);
      console.log("resJSON", resJSON);
      console.log("earlistLedgerVersion", resAPI.earlistLedgerVersion);

      // response
      const res = new rippleapi_pb.ResponseSubmitTransaction();
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
      const res = new rippleapi_pb.ResponseWaitValidation();
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

};

export default {
  service: rippleapi_grpc_pb.RippleAPIService,  // Service interface
  impl: new RippleAPIService(wsURL),            // Service interface definitions
};
