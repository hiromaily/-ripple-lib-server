// package: rippleapi
// file: proto/rippleapi/rippleapi.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Instructions extends jspb.Message { 
    getFee(): string;
    setFee(value: string): Instructions;

    getMaxfee(): string;
    setMaxfee(value: string): Instructions;

    getMaxledgerversion(): number;
    setMaxledgerversion(value: number): Instructions;

    getMaxledgerversionoffset(): number;
    setMaxledgerversionoffset(value: number): Instructions;

    getSequence(): number;
    setSequence(value: number): Instructions;

    getSignerscount(): number;
    setSignerscount(value: number): Instructions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Instructions.AsObject;
    static toObject(includeInstance: boolean, msg: Instructions): Instructions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Instructions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Instructions;
    static deserializeBinaryFromReader(message: Instructions, reader: jspb.BinaryReader): Instructions;
}

export namespace Instructions {
    export type AsObject = {
        fee: string,
        maxfee: string,
        maxledgerversion: number,
        maxledgerversionoffset: number,
        sequence: number,
        signerscount: number,
    }
}

export class RequestPrepareTransaction extends jspb.Message { 
    getTxType(): EnumTransactionType;
    setTxType(value: EnumTransactionType): RequestPrepareTransaction;

    getSenderaccount(): string;
    setSenderaccount(value: string): RequestPrepareTransaction;

    getAmount(): number;
    setAmount(value: number): RequestPrepareTransaction;

    getReceiveraccount(): string;
    setReceiveraccount(value: string): RequestPrepareTransaction;


    hasInstructions(): boolean;
    clearInstructions(): void;
    getInstructions(): Instructions | undefined;
    setInstructions(value?: Instructions): RequestPrepareTransaction;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestPrepareTransaction.AsObject;
    static toObject(includeInstance: boolean, msg: RequestPrepareTransaction): RequestPrepareTransaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestPrepareTransaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestPrepareTransaction;
    static deserializeBinaryFromReader(message: RequestPrepareTransaction, reader: jspb.BinaryReader): RequestPrepareTransaction;
}

export namespace RequestPrepareTransaction {
    export type AsObject = {
        txType: EnumTransactionType,
        senderaccount: string,
        amount: number,
        receiveraccount: string,
        instructions?: Instructions.AsObject,
    }
}

export class ResponsePrepareTransaction extends jspb.Message { 
    getTxjson(): string;
    setTxjson(value: string): ResponsePrepareTransaction;


    hasInstructions(): boolean;
    clearInstructions(): void;
    getInstructions(): Instructions | undefined;
    setInstructions(value?: Instructions): ResponsePrepareTransaction;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponsePrepareTransaction.AsObject;
    static toObject(includeInstance: boolean, msg: ResponsePrepareTransaction): ResponsePrepareTransaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponsePrepareTransaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponsePrepareTransaction;
    static deserializeBinaryFromReader(message: ResponsePrepareTransaction, reader: jspb.BinaryReader): ResponsePrepareTransaction;
}

export namespace ResponsePrepareTransaction {
    export type AsObject = {
        txjson: string,
        instructions?: Instructions.AsObject,
    }
}

export class RequestSign extends jspb.Message { 
    getTxjson(): string;
    setTxjson(value: string): RequestSign;

    getSecret(): string;
    setSecret(value: string): RequestSign;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestSign.AsObject;
    static toObject(includeInstance: boolean, msg: RequestSign): RequestSign.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestSign, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestSign;
    static deserializeBinaryFromReader(message: RequestSign, reader: jspb.BinaryReader): RequestSign;
}

export namespace RequestSign {
    export type AsObject = {
        txjson: string,
        secret: string,
    }
}

export class ResponseSign extends jspb.Message { 
    getTxid(): string;
    setTxid(value: string): ResponseSign;

    getTxblob(): string;
    setTxblob(value: string): ResponseSign;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseSign.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseSign): ResponseSign.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseSign, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseSign;
    static deserializeBinaryFromReader(message: ResponseSign, reader: jspb.BinaryReader): ResponseSign;
}

export namespace ResponseSign {
    export type AsObject = {
        txid: string,
        txblob: string,
    }
}

export enum EnumTransactionType {
    TX_ACCOUNT_SET = 0,
    TX_ACCOUNT_DELETE = 1,
    TX_CHECK_CANCEL = 2,
    TX_CHECK_CASH = 3,
    TX_CHECK_CREATE = 4,
    TX_DEPOSIT_PREAUTH = 5,
    TX_ESCROW_CANCEL = 6,
    TX_ESCROW_CREATE = 7,
    TX_ESCROW_FINISH = 8,
    TX_OFFER_CANCEL = 9,
    TX_OFFER_CREATE = 10,
    TX_PAYMENT = 11,
    TX_PAYMENT_CHANNEL_CLAIM = 12,
    TX_PAYMENT_CHANNEL_CREATE = 13,
    TX_PAYMENT_CHANNEL_FUND = 14,
    TX_SET_REGULAR_KEY = 15,
    TX_SINGER_LIST_SET = 16,
    TX_TRUST_SET = 17,
}
