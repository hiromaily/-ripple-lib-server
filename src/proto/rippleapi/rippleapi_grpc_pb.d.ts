// package: rippleapi
// file: proto/rippleapi/rippleapi.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_rippleapi_rippleapi_pb from "../../proto/rippleapi/rippleapi_pb";

interface IRippleAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    prepareTransaction: IRippleAPIService_IPrepareTransaction;
    signTransaction: IRippleAPIService_ISignTransaction;
    submitTransaction: IRippleAPIService_ISubmitTransaction;
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
interface IRippleAPIService_ISignTransaction extends grpc.MethodDefinition<proto_rippleapi_rippleapi_pb.RequestSignTransaction, proto_rippleapi_rippleapi_pb.ResponseSignTransaction> {
    path: string; // "/rippleapi.RippleAPI/SignTransaction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_rippleapi_rippleapi_pb.RequestSignTransaction>;
    requestDeserialize: grpc.deserialize<proto_rippleapi_rippleapi_pb.RequestSignTransaction>;
    responseSerialize: grpc.serialize<proto_rippleapi_rippleapi_pb.ResponseSignTransaction>;
    responseDeserialize: grpc.deserialize<proto_rippleapi_rippleapi_pb.ResponseSignTransaction>;
}
interface IRippleAPIService_ISubmitTransaction extends grpc.MethodDefinition<proto_rippleapi_rippleapi_pb.RequestSubmitTransaction, proto_rippleapi_rippleapi_pb.ResponseSubmitTransaction> {
    path: string; // "/rippleapi.RippleAPI/SubmitTransaction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_rippleapi_rippleapi_pb.RequestSubmitTransaction>;
    requestDeserialize: grpc.deserialize<proto_rippleapi_rippleapi_pb.RequestSubmitTransaction>;
    responseSerialize: grpc.serialize<proto_rippleapi_rippleapi_pb.ResponseSubmitTransaction>;
    responseDeserialize: grpc.deserialize<proto_rippleapi_rippleapi_pb.ResponseSubmitTransaction>;
}

export const RippleAPIService: IRippleAPIService;

export interface IRippleAPIServer {
    prepareTransaction: grpc.handleUnaryCall<proto_rippleapi_rippleapi_pb.RequestPrepareTransaction, proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction>;
    signTransaction: grpc.handleUnaryCall<proto_rippleapi_rippleapi_pb.RequestSignTransaction, proto_rippleapi_rippleapi_pb.ResponseSignTransaction>;
    submitTransaction: grpc.handleUnaryCall<proto_rippleapi_rippleapi_pb.RequestSubmitTransaction, proto_rippleapi_rippleapi_pb.ResponseSubmitTransaction>;
}

export interface IRippleAPIClient {
    prepareTransaction(request: proto_rippleapi_rippleapi_pb.RequestPrepareTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
    prepareTransaction(request: proto_rippleapi_rippleapi_pb.RequestPrepareTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
    prepareTransaction(request: proto_rippleapi_rippleapi_pb.RequestPrepareTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
    signTransaction(request: proto_rippleapi_rippleapi_pb.RequestSignTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponseSignTransaction) => void): grpc.ClientUnaryCall;
    signTransaction(request: proto_rippleapi_rippleapi_pb.RequestSignTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponseSignTransaction) => void): grpc.ClientUnaryCall;
    signTransaction(request: proto_rippleapi_rippleapi_pb.RequestSignTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponseSignTransaction) => void): grpc.ClientUnaryCall;
    submitTransaction(request: proto_rippleapi_rippleapi_pb.RequestSubmitTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponseSubmitTransaction) => void): grpc.ClientUnaryCall;
    submitTransaction(request: proto_rippleapi_rippleapi_pb.RequestSubmitTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponseSubmitTransaction) => void): grpc.ClientUnaryCall;
    submitTransaction(request: proto_rippleapi_rippleapi_pb.RequestSubmitTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponseSubmitTransaction) => void): grpc.ClientUnaryCall;
}

export class RippleAPIClient extends grpc.Client implements IRippleAPIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public prepareTransaction(request: proto_rippleapi_rippleapi_pb.RequestPrepareTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
    public prepareTransaction(request: proto_rippleapi_rippleapi_pb.RequestPrepareTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
    public prepareTransaction(request: proto_rippleapi_rippleapi_pb.RequestPrepareTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
    public signTransaction(request: proto_rippleapi_rippleapi_pb.RequestSignTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponseSignTransaction) => void): grpc.ClientUnaryCall;
    public signTransaction(request: proto_rippleapi_rippleapi_pb.RequestSignTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponseSignTransaction) => void): grpc.ClientUnaryCall;
    public signTransaction(request: proto_rippleapi_rippleapi_pb.RequestSignTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponseSignTransaction) => void): grpc.ClientUnaryCall;
    public submitTransaction(request: proto_rippleapi_rippleapi_pb.RequestSubmitTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponseSubmitTransaction) => void): grpc.ClientUnaryCall;
    public submitTransaction(request: proto_rippleapi_rippleapi_pb.RequestSubmitTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponseSubmitTransaction) => void): grpc.ClientUnaryCall;
    public submitTransaction(request: proto_rippleapi_rippleapi_pb.RequestSubmitTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_rippleapi_pb.ResponseSubmitTransaction) => void): grpc.ClientUnaryCall;
}
