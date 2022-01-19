/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as auth_pb from './auth_pb';


export class AuthClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoAuthLogin = new grpcWeb.MethodDescriptor(
    '/Auth/AuthLogin',
    grpcWeb.MethodType.UNARY,
    auth_pb.ReqAuth,
    auth_pb.RespAuth,
    (request: auth_pb.ReqAuth) => {
      return request.serializeBinary();
    },
    auth_pb.RespAuth.deserializeBinary
  );

  authLogin(
    request: auth_pb.ReqAuth,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.RespAuth>;

  authLogin(
    request: auth_pb.ReqAuth,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.RespAuth) => void): grpcWeb.ClientReadableStream<auth_pb.RespAuth>;

  authLogin(
    request: auth_pb.ReqAuth,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.RespAuth) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Auth/AuthLogin',
        request,
        metadata || {},
        this.methodInfoAuthLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Auth/AuthLogin',
    request,
    metadata || {},
    this.methodInfoAuthLogin);
  }

}

