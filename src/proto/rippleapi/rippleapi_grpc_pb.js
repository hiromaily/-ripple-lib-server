// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_rippleapi_rippleapi_pb = require('../../proto/rippleapi/rippleapi_pb.js');

function serialize_rippleapi_RequestPrepareTransaction(arg) {
  if (!(arg instanceof proto_rippleapi_rippleapi_pb.RequestPrepareTransaction)) {
    throw new Error('Expected argument of type rippleapi.RequestPrepareTransaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rippleapi_RequestPrepareTransaction(buffer_arg) {
  return proto_rippleapi_rippleapi_pb.RequestPrepareTransaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rippleapi_RequestSignTransaction(arg) {
  if (!(arg instanceof proto_rippleapi_rippleapi_pb.RequestSignTransaction)) {
    throw new Error('Expected argument of type rippleapi.RequestSignTransaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rippleapi_RequestSignTransaction(buffer_arg) {
  return proto_rippleapi_rippleapi_pb.RequestSignTransaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rippleapi_RequestSubmitTransaction(arg) {
  if (!(arg instanceof proto_rippleapi_rippleapi_pb.RequestSubmitTransaction)) {
    throw new Error('Expected argument of type rippleapi.RequestSubmitTransaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rippleapi_RequestSubmitTransaction(buffer_arg) {
  return proto_rippleapi_rippleapi_pb.RequestSubmitTransaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rippleapi_ResponsePrepareTransaction(arg) {
  if (!(arg instanceof proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction)) {
    throw new Error('Expected argument of type rippleapi.ResponsePrepareTransaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rippleapi_ResponsePrepareTransaction(buffer_arg) {
  return proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rippleapi_ResponseSignTransaction(arg) {
  if (!(arg instanceof proto_rippleapi_rippleapi_pb.ResponseSignTransaction)) {
    throw new Error('Expected argument of type rippleapi.ResponseSignTransaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rippleapi_ResponseSignTransaction(buffer_arg) {
  return proto_rippleapi_rippleapi_pb.ResponseSignTransaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rippleapi_ResponseSubmitTransaction(arg) {
  if (!(arg instanceof proto_rippleapi_rippleapi_pb.ResponseSubmitTransaction)) {
    throw new Error('Expected argument of type rippleapi.ResponseSubmitTransaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rippleapi_ResponseSubmitTransaction(buffer_arg) {
  return proto_rippleapi_rippleapi_pb.ResponseSubmitTransaction.deserializeBinary(new Uint8Array(buffer_arg));
}


// RippleAPI 
var RippleAPIService = exports.RippleAPIService = {
  // https://xrpl.org/rippleapi-reference.html#preparetransaction
prepareTransaction: {
    path: '/rippleapi.RippleAPI/PrepareTransaction',
    requestStream: false,
    responseStream: false,
    requestType: proto_rippleapi_rippleapi_pb.RequestPrepareTransaction,
    responseType: proto_rippleapi_rippleapi_pb.ResponsePrepareTransaction,
    requestSerialize: serialize_rippleapi_RequestPrepareTransaction,
    requestDeserialize: deserialize_rippleapi_RequestPrepareTransaction,
    responseSerialize: serialize_rippleapi_ResponsePrepareTransaction,
    responseDeserialize: deserialize_rippleapi_ResponsePrepareTransaction,
  },
  signTransaction: {
    path: '/rippleapi.RippleAPI/SignTransaction',
    requestStream: false,
    responseStream: false,
    requestType: proto_rippleapi_rippleapi_pb.RequestSignTransaction,
    responseType: proto_rippleapi_rippleapi_pb.ResponseSignTransaction,
    requestSerialize: serialize_rippleapi_RequestSignTransaction,
    requestDeserialize: deserialize_rippleapi_RequestSignTransaction,
    responseSerialize: serialize_rippleapi_ResponseSignTransaction,
    responseDeserialize: deserialize_rippleapi_ResponseSignTransaction,
  },
  submitTransaction: {
    path: '/rippleapi.RippleAPI/SubmitTransaction',
    requestStream: false,
    responseStream: false,
    requestType: proto_rippleapi_rippleapi_pb.RequestSubmitTransaction,
    responseType: proto_rippleapi_rippleapi_pb.ResponseSubmitTransaction,
    requestSerialize: serialize_rippleapi_RequestSubmitTransaction,
    requestDeserialize: deserialize_rippleapi_RequestSubmitTransaction,
    responseSerialize: serialize_rippleapi_ResponseSubmitTransaction,
    responseDeserialize: deserialize_rippleapi_ResponseSubmitTransaction,
  },
};

exports.RippleAPIClient = grpc.makeGenericClientConstructor(RippleAPIService);
