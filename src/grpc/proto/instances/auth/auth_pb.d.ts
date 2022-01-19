import * as jspb from 'google-protobuf'



export class ReqAuth extends jspb.Message {
  getFi(): string;
  setFi(value: string): ReqAuth;

  getFn(): string;
  setFn(value: string): ReqAuth;

  getC(): ReqContentLogin | undefined;
  setC(value?: ReqContentLogin): ReqAuth;
  hasC(): boolean;
  clearC(): ReqAuth;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReqAuth.AsObject;
  static toObject(includeInstance: boolean, msg: ReqAuth): ReqAuth.AsObject;
  static serializeBinaryToWriter(message: ReqAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReqAuth;
  static deserializeBinaryFromReader(message: ReqAuth, reader: jspb.BinaryReader): ReqAuth;
}

export namespace ReqAuth {
  export type AsObject = {
    fi: string,
    fn: string,
    c?: ReqContentLogin.AsObject,
  }
}

export class RespAuth extends jspb.Message {
  getCode(): number;
  setCode(value: number): RespAuth;

  getMsg(): string;
  setMsg(value: string): RespAuth;

  getContent(): RespContentLogin | undefined;
  setContent(value?: RespContentLogin): RespAuth;
  hasContent(): boolean;
  clearContent(): RespAuth;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RespAuth.AsObject;
  static toObject(includeInstance: boolean, msg: RespAuth): RespAuth.AsObject;
  static serializeBinaryToWriter(message: RespAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RespAuth;
  static deserializeBinaryFromReader(message: RespAuth, reader: jspb.BinaryReader): RespAuth;
}

export namespace RespAuth {
  export type AsObject = {
    code: number,
    msg: string,
    content?: RespContentLogin.AsObject,
  }
}

export class RespContentLogin extends jspb.Message {
  getSessionId(): number;
  setSessionId(value: number): RespContentLogin;

  getSessionSequence(): number;
  setSessionSequence(value: number): RespContentLogin;

  getToken(): number;
  setToken(value: number): RespContentLogin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RespContentLogin.AsObject;
  static toObject(includeInstance: boolean, msg: RespContentLogin): RespContentLogin.AsObject;
  static serializeBinaryToWriter(message: RespContentLogin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RespContentLogin;
  static deserializeBinaryFromReader(message: RespContentLogin, reader: jspb.BinaryReader): RespContentLogin;
}

export namespace RespContentLogin {
  export type AsObject = {
    sessionId: number,
    sessionSequence: number,
    token: number,
  }
}

export class ReqContentLogin extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): ReqContentLogin;

  getUser(): string;
  setUser(value: string): ReqContentLogin;

  getPassword(): string;
  setPassword(value: string): ReqContentLogin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReqContentLogin.AsObject;
  static toObject(includeInstance: boolean, msg: ReqContentLogin): ReqContentLogin.AsObject;
  static serializeBinaryToWriter(message: ReqContentLogin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReqContentLogin;
  static deserializeBinaryFromReader(message: ReqContentLogin, reader: jspb.BinaryReader): ReqContentLogin;
}

export namespace ReqContentLogin {
  export type AsObject = {
    address: string,
    user: string,
    password: string,
  }
}

