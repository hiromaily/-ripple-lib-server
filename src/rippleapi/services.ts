import 'dotenv/config';
import * as grpc from 'grpc';
import * as ripple from 'ripple-lib';
import * as rippleapi_grpc_pb from '../proto/rippleapi/rippleapi_grpc_pb';
import * as rippleapi_pb from '../proto/rippleapi/rippleapi_pb';
import { enumTransactionTypeString } from './enum';

const wsURL: string = process.env.RippleAPIURL || 'wss://s.altnet.rippletest.net:51233';

interface transaction {
  TransactionType: string;
  Account: string;
  Amount: string;
  Destination: string;
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

  signTransaction = (
    call: grpc.ServerUnaryCall<rippleapi_pb.RequestSign>,
    callback: grpc.sendUnaryData<rippleapi_pb.ResponseSign>,
  ) : void => {
    console.log("[signTransaction] is called");
  
    // call API
    const signed = this.rippleAPI.sign(call.request.getTxjson(), call.request.getSecret());
    console.log("txID: Identifying hash:", signed.id);
    console.log("txBlob: Signed blob:", signed.signedTransaction);
  
    // response
    const res = new rippleapi_pb.ResponseSign();
    res.setTxid(signed.id);
    res.setTxblob(signed.signedTransaction);
    callback(null, res);
  }
  
};

export default {
  service: rippleapi_grpc_pb.RippleAPIService,  // Service interface
  impl: new RippleAPIService(wsURL),            // Service interface definitions
};
