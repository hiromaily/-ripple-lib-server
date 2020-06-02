import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import * as grpc from 'grpc';
import * as ripple from 'ripple-lib';
import * as account_grpc_pb from '../proto/rippleapi/account_grpc_pb';
import * as account_pb from '../proto/rippleapi/account_pb';


export class RippleAccountAPIService implements account_grpc_pb.IRippleAccountAPIServer {
  private rippleAPI: ripple.RippleAPI;

  public constructor(rippleAPI: ripple.RippleAPI) {
    this.rippleAPI = rippleAPI;
  }

  // getAccountInfo handler
  getAccountInfo = (
    call: grpc.ServerUnaryCall<account_pb.RequestGetAccountInfo>,
    callback: grpc.sendUnaryData<account_pb.ResponseGetAccountInfo>,
  ) : void => {
    console.log("[getAccountInfo] is called");
    const address = call.request.getAddress();
    //const ledgerversion = call.request.getLedgerversion();

    this.rippleAPI.getAccountInfo(address).then(info => {
      console.log("account xrpBalance:", info.xrpBalance);
      // response
      const res = new account_pb.ResponseGetAccountInfo();
      res.setSequence(info.sequence);
      res.setXrpbalance(info.xrpBalance);
      res.setOwnercount(info.ownerCount);
      res.setPreviousaffectingtransactionid(info.previousAffectingTransactionID);
      res.setPreviousaffectingtransactionledgerversion(info.previousAffectingTransactionLedgerVersion);
      callback(null, res);
    });
  }

};

export const service = account_grpc_pb.RippleAccountAPIService;
