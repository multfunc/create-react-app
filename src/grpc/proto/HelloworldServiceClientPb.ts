/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_helloworld_pb from '../proto/helloworld_pb';


export class GreeterClient {
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

  methodInfoSayHello = new grpcWeb.MethodDescriptor(
    '/Greeter/SayHello',
    grpcWeb.MethodType.UNARY,
    proto_helloworld_pb.HelloRequest,
    proto_helloworld_pb.HelloReply,
    (request: proto_helloworld_pb.HelloRequest) => {
      return request.serializeBinary();
    },
    proto_helloworld_pb.HelloReply.deserializeBinary
  );

  sayHello(
    request: proto_helloworld_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_helloworld_pb.HelloReply>;

  sayHello(
    request: proto_helloworld_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_helloworld_pb.HelloReply) => void): grpcWeb.ClientReadableStream<proto_helloworld_pb.HelloReply>;

  sayHello(
    request: proto_helloworld_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_helloworld_pb.HelloReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Greeter/SayHello',
        request,
        metadata || {},
        this.methodInfoSayHello,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Greeter/SayHello',
    request,
    metadata || {},
    this.methodInfoSayHello);
  }

  methodInfoSayList = new grpcWeb.MethodDescriptor(
    '/Greeter/SayList',
    grpcWeb.MethodType.SERVER_STREAMING,
    proto_helloworld_pb.HelloRequest,
    proto_helloworld_pb.HelloReply,
    (request: proto_helloworld_pb.HelloRequest) => {
      return request.serializeBinary();
    },
    proto_helloworld_pb.HelloReply.deserializeBinary
  );

  sayList(
    request: proto_helloworld_pb.HelloRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/Greeter/SayList',
      request,
      metadata || {},
      this.methodInfoSayList);
  }

}

