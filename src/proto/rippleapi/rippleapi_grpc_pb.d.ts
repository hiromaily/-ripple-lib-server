// package: rippleapi
// file: proto/rippleapi/rippleapi.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_rippleapi_rippleapi_pb from "../../proto/rippleapi/rippleapi_pb";

interface IRippleAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    prepareTransaction: IRippleAPIService_IPrepareTransaction;
}

interface IRippleAPIService_IPrepareTransaction extends grpc.MethodDefinition<proto_rippleapi_rippleapi_pb.RequestPrepareTransaction, proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction> {
    path: string; // "/rippleapi.RippleAPI/PrepareTransaction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_rippleapi_rippleapi_pb.RequestPrepareTransaction>;
    requestDeserialize: grpc.deserialize<proto_rippleapi_rippleapi_pb.RequestPrepareTransaction>;
    responseSerialize: grpc.serialize<proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction>;
    responseDeserialize: grpc.deserialize<proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction>;
}

export const RippleAPIService: IRippleAPIService;

export interface IRippleAPIServer {
    prepareTransaction: grpc.handleUnaryCall<proto_rippleapi_rippleapi_pb.RequestPrepareTransaction, proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction>;
}

export interface IRippleAPIClient {
    prepareTransaction(request: proto_rippleapi_rippleapi_pb.RequestPrepareTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
    prepareTransaction(request: proto_rippleapi_rippleapi_pb.RequestPrepareTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
    prepareTransaction(request: proto_rippleapi_rippleapi_pb.RequestPrepareTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
}

export class RippleAPIClient extends grpc.Client implements IRippleAPIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public prepareTransaction(request: proto_rippleapi_rippleapi_pb.RequestPrepareTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
    public prepareTransaction(request: proto_rippleapi_rippleapi_pb.RequestPrepareTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
    public prepareTransaction(request: proto_rippleapi_rippleapi_pb.RequestPrepareTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
}
