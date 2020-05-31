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

function serialize_rippleapi_RequestSign(arg) {
  if (!(arg instanceof proto_rippleapi_rippleapi_pb.RequestSign)) {
    throw new Error('Expected argument of type rippleapi.RequestSign');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rippleapi_RequestSign(buffer_arg) {
  return proto_rippleapi_rippleapi_pb.RequestSign.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_rippleapi_ResponseSign(arg) {
  if (!(arg instanceof proto_rippleapi_rippleapi_pb.ResponseSign)) {
    throw new Error('Expected argument of type rippleapi.ResponseSign');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rippleapi_ResponseSign(buffer_arg) {
  return proto_rippleapi_rippleapi_pb.ResponseSign.deserializeBinary(new Uint8Array(buffer_arg));
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
    requestType: proto_rippleapi_rippleapi_pb.RequestSign,
    responseType: proto_rippleapi_rippleapi_pb.ResponseSign,
    requestSerialize: serialize_rippleapi_RequestSign,
    requestDeserialize: deserialize_rippleapi_RequestSign,
    responseSerialize: serialize_rippleapi_ResponseSign,
    responseDeserialize: deserialize_rippleapi_ResponseSign,
  },
};

exports.RippleAPIClient = grpc.makeGenericClientConstructor(RippleAPIService);
