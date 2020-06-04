// package: rippleapi.transaction
// file: proto/rippleapi/transaction.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_rippleapi_transaction_pb from "../../proto/rippleapi/transaction_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IRippleTransactionAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    prepareTransaction: IRippleTransactionAPIService_IPrepareTransaction;
    signTransaction: IRippleTransactionAPIService_ISignTransaction;
    submitTransaction: IRippleTransactionAPIService_ISubmitTransaction;
    waitValidation: IRippleTransactionAPIService_IWaitValidation;
    getTransaction: IRippleTransactionAPIService_IGetTransaction;
    combineTransaction: IRippleTransactionAPIService_ICombineTransaction;
}

interface IRippleTransactionAPIService_IPrepareTransaction extends grpc.MethodDefinition<proto_rippleapi_transaction_pb.RequestPrepareTransaction, proto_rippleapi_transaction_pb.ResponsePrepareTransaction> {
    path: string; // "/rippleapi.transaction.RippleTransactionAPI/PrepareTransaction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_rippleapi_transaction_pb.RequestPrepareTransaction>;
    requestDeserialize: grpc.deserialize<proto_rippleapi_transaction_pb.RequestPrepareTransaction>;
    responseSerialize: grpc.serialize<proto_rippleapi_transaction_pb.ResponsePrepareTransaction>;
    responseDeserialize: grpc.deserialize<proto_rippleapi_transaction_pb.ResponsePrepareTransaction>;
}
interface IRippleTransactionAPIService_ISignTransaction extends grpc.MethodDefinition<proto_rippleapi_transaction_pb.RequestSignTransaction, proto_rippleapi_transaction_pb.ResponseSignTransaction> {
    path: string; // "/rippleapi.transaction.RippleTransactionAPI/SignTransaction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_rippleapi_transaction_pb.RequestSignTransaction>;
    requestDeserialize: grpc.deserialize<proto_rippleapi_transaction_pb.RequestSignTransaction>;
    responseSerialize: grpc.serialize<proto_rippleapi_transaction_pb.ResponseSignTransaction>;
    responseDeserialize: grpc.deserialize<proto_rippleapi_transaction_pb.ResponseSignTransaction>;
}
interface IRippleTransactionAPIService_ISubmitTransaction extends grpc.MethodDefinition<proto_rippleapi_transaction_pb.RequestSubmitTransaction, proto_rippleapi_transaction_pb.ResponseSubmitTransaction> {
    path: string; // "/rippleapi.transaction.RippleTransactionAPI/SubmitTransaction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_rippleapi_transaction_pb.RequestSubmitTransaction>;
    requestDeserialize: grpc.deserialize<proto_rippleapi_transaction_pb.RequestSubmitTransaction>;
    responseSerialize: grpc.serialize<proto_rippleapi_transaction_pb.ResponseSubmitTransaction>;
    responseDeserialize: grpc.deserialize<proto_rippleapi_transaction_pb.ResponseSubmitTransaction>;
}
interface IRippleTransactionAPIService_IWaitValidation extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_rippleapi_transaction_pb.ResponseWaitValidation> {
    path: string; // "/rippleapi.transaction.RippleTransactionAPI/WaitValidation"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_rippleapi_transaction_pb.ResponseWaitValidation>;
    responseDeserialize: grpc.deserialize<proto_rippleapi_transaction_pb.ResponseWaitValidation>;
}
interface IRippleTransactionAPIService_IGetTransaction extends grpc.MethodDefinition<proto_rippleapi_transaction_pb.RequestGetTransaction, proto_rippleapi_transaction_pb.ResponseGetTransaction> {
    path: string; // "/rippleapi.transaction.RippleTransactionAPI/GetTransaction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_rippleapi_transaction_pb.RequestGetTransaction>;
    requestDeserialize: grpc.deserialize<proto_rippleapi_transaction_pb.RequestGetTransaction>;
    responseSerialize: grpc.serialize<proto_rippleapi_transaction_pb.ResponseGetTransaction>;
    responseDeserialize: grpc.deserialize<proto_rippleapi_transaction_pb.ResponseGetTransaction>;
}
interface IRippleTransactionAPIService_ICombineTransaction extends grpc.MethodDefinition<proto_rippleapi_transaction_pb.RequestCombineTransaction, proto_rippleapi_transaction_pb.ResponseCombineTransaction> {
    path: string; // "/rippleapi.transaction.RippleTransactionAPI/CombineTransaction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_rippleapi_transaction_pb.RequestCombineTransaction>;
    requestDeserialize: grpc.deserialize<proto_rippleapi_transaction_pb.RequestCombineTransaction>;
    responseSerialize: grpc.serialize<proto_rippleapi_transaction_pb.ResponseCombineTransaction>;
    responseDeserialize: grpc.deserialize<proto_rippleapi_transaction_pb.ResponseCombineTransaction>;
}

export const RippleTransactionAPIService: IRippleTransactionAPIService;

export interface IRippleTransactionAPIServer {
    prepareTransaction: grpc.handleUnaryCall<proto_rippleapi_transaction_pb.RequestPrepareTransaction, proto_rippleapi_transaction_pb.ResponsePrepareTransaction>;
    signTransaction: grpc.handleUnaryCall<proto_rippleapi_transaction_pb.RequestSignTransaction, proto_rippleapi_transaction_pb.ResponseSignTransaction>;
    submitTransaction: grpc.handleUnaryCall<proto_rippleapi_transaction_pb.RequestSubmitTransaction, proto_rippleapi_transaction_pb.ResponseSubmitTransaction>;
    waitValidation: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, proto_rippleapi_transaction_pb.ResponseWaitValidation>;
    getTransaction: grpc.handleUnaryCall<proto_rippleapi_transaction_pb.RequestGetTransaction, proto_rippleapi_transaction_pb.ResponseGetTransaction>;
    combineTransaction: grpc.handleUnaryCall<proto_rippleapi_transaction_pb.RequestCombineTransaction, proto_rippleapi_transaction_pb.ResponseCombineTransaction>;
}

export interface IRippleTransactionAPIClient {
    prepareTransaction(request: proto_rippleapi_transaction_pb.RequestPrepareTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
    prepareTransaction(request: proto_rippleapi_transaction_pb.RequestPrepareTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
    prepareTransaction(request: proto_rippleapi_transaction_pb.RequestPrepareTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
    signTransaction(request: proto_rippleapi_transaction_pb.RequestSignTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseSignTransaction) => void): grpc.ClientUnaryCall;
    signTransaction(request: proto_rippleapi_transaction_pb.RequestSignTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseSignTransaction) => void): grpc.ClientUnaryCall;
    signTransaction(request: proto_rippleapi_transaction_pb.RequestSignTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseSignTransaction) => void): grpc.ClientUnaryCall;
    submitTransaction(request: proto_rippleapi_transaction_pb.RequestSubmitTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseSubmitTransaction) => void): grpc.ClientUnaryCall;
    submitTransaction(request: proto_rippleapi_transaction_pb.RequestSubmitTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseSubmitTransaction) => void): grpc.ClientUnaryCall;
    submitTransaction(request: proto_rippleapi_transaction_pb.RequestSubmitTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseSubmitTransaction) => void): grpc.ClientUnaryCall;
    waitValidation(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_rippleapi_transaction_pb.ResponseWaitValidation>;
    waitValidation(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_rippleapi_transaction_pb.ResponseWaitValidation>;
    getTransaction(request: proto_rippleapi_transaction_pb.RequestGetTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseGetTransaction) => void): grpc.ClientUnaryCall;
    getTransaction(request: proto_rippleapi_transaction_pb.RequestGetTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseGetTransaction) => void): grpc.ClientUnaryCall;
    getTransaction(request: proto_rippleapi_transaction_pb.RequestGetTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseGetTransaction) => void): grpc.ClientUnaryCall;
    combineTransaction(request: proto_rippleapi_transaction_pb.RequestCombineTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseCombineTransaction) => void): grpc.ClientUnaryCall;
    combineTransaction(request: proto_rippleapi_transaction_pb.RequestCombineTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseCombineTransaction) => void): grpc.ClientUnaryCall;
    combineTransaction(request: proto_rippleapi_transaction_pb.RequestCombineTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseCombineTransaction) => void): grpc.ClientUnaryCall;
}

export class RippleTransactionAPIClient extends grpc.Client implements IRippleTransactionAPIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public prepareTransaction(request: proto_rippleapi_transaction_pb.RequestPrepareTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
    public prepareTransaction(request: proto_rippleapi_transaction_pb.RequestPrepareTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
    public prepareTransaction(request: proto_rippleapi_transaction_pb.RequestPrepareTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponsePrepareTransaction) => void): grpc.ClientUnaryCall;
    public signTransaction(request: proto_rippleapi_transaction_pb.RequestSignTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseSignTransaction) => void): grpc.ClientUnaryCall;
    public signTransaction(request: proto_rippleapi_transaction_pb.RequestSignTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseSignTransaction) => void): grpc.ClientUnaryCall;
    public signTransaction(request: proto_rippleapi_transaction_pb.RequestSignTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseSignTransaction) => void): grpc.ClientUnaryCall;
    public submitTransaction(request: proto_rippleapi_transaction_pb.RequestSubmitTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseSubmitTransaction) => void): grpc.ClientUnaryCall;
    public submitTransaction(request: proto_rippleapi_transaction_pb.RequestSubmitTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseSubmitTransaction) => void): grpc.ClientUnaryCall;
    public submitTransaction(request: proto_rippleapi_transaction_pb.RequestSubmitTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseSubmitTransaction) => void): grpc.ClientUnaryCall;
    public waitValidation(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_rippleapi_transaction_pb.ResponseWaitValidation>;
    public waitValidation(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_rippleapi_transaction_pb.ResponseWaitValidation>;
    public getTransaction(request: proto_rippleapi_transaction_pb.RequestGetTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseGetTransaction) => void): grpc.ClientUnaryCall;
    public getTransaction(request: proto_rippleapi_transaction_pb.RequestGetTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseGetTransaction) => void): grpc.ClientUnaryCall;
    public getTransaction(request: proto_rippleapi_transaction_pb.RequestGetTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseGetTransaction) => void): grpc.ClientUnaryCall;
    public combineTransaction(request: proto_rippleapi_transaction_pb.RequestCombineTransaction, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseCombineTransaction) => void): grpc.ClientUnaryCall;
    public combineTransaction(request: proto_rippleapi_transaction_pb.RequestCombineTransaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseCombineTransaction) => void): grpc.ClientUnaryCall;
    public combineTransaction(request: proto_rippleapi_transaction_pb.RequestCombineTransaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_rippleapi_transaction_pb.ResponseCombineTransaction) => void): grpc.ClientUnaryCall;
}
