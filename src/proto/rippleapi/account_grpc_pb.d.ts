// package: rippleapi.account
// file: proto/rippleapi/account.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_rippleapi_account_pb from "../../proto/rippleapi/account_pb";

interface IRippleAccountAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAccountInfo: IRippleAccountAPIService_IGetAccountInfo;
}

interface IRippleAccountAPIService_IGetAccountInfo extends grpc.MethodDefinition<proto_rippleapi_account_pb.RequestGetAccountInfo, proto_rippleapi_account_pb.ResponseGetAccountInfo> {
    path: string; // "/rippleapi.account.RippleAccountAPI/GetAccountInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_rippleapi_account_pb.RequestGetAccountInfo>;
    requestDeserialize: grpc.deserialize<proto_rippleapi_account_pb.RequestGetAccountInfo>;
    responseSerialize: grpc.serialize<proto_rippleapi_account_pb.ResponseGetAccountInfo>;
    responseDeserialize: grpc.deserialize<proto_rippleapi_account_pb.ResponseGetAccountInfo>;
}

export const RippleAccountAPIService: IRippleAccountAPIService;

export interface IRippleAccountAPIServer {
    getAccountInfo: grpc.handleUnaryCall<proto_rippleapi_account_pb.RequestGetAccountInfo, proto_rippleapi_account_pb.ResponseGetAccountInfo>;
}

export interface IRippleAccountAPIClient {
    getAccountInfo(request: proto_rippleapi_account_pb.RequestGetAccountInfo, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_account_pb.ResponseGetAccountInfo) => void): grpc.ClientUnaryCall;
    getAccountInfo(request: proto_rippleapi_account_pb.RequestGetAccountInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_account_pb.ResponseGetAccountInfo) => void): grpc.ClientUnaryCall;
    getAccountInfo(request: proto_rippleapi_account_pb.RequestGetAccountInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_account_pb.ResponseGetAccountInfo) => void): grpc.ClientUnaryCall;
}

export class RippleAccountAPIClient extends grpc.Client implements IRippleAccountAPIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getAccountInfo(request: proto_rippleapi_account_pb.RequestGetAccountInfo, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_account_pb.ResponseGetAccountInfo) => void): grpc.ClientUnaryCall;
    public getAccountInfo(request: proto_rippleapi_account_pb.RequestGetAccountInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_account_pb.ResponseGetAccountInfo) => void): grpc.ClientUnaryCall;
    public getAccountInfo(request: proto_rippleapi_account_pb.RequestGetAccountInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_account_pb.ResponseGetAccountInfo) => void): grpc.ClientUnaryCall;
}
