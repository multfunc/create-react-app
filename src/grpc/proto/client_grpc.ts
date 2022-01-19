import * as grpcWeb from 'grpc-web'
import {GreeterClient} from './HelloworldServiceClientPb'
import {HelloRequest,HelloReply} from "./helloworld_pb";

const service = new GreeterClient('http://localhost:8080', null, null)

const req = new HelloRequest()
const resp = new HelloReply()
export function testGrpc(){
    const call = service.sayHello(req, {}, (err: grpcWeb.RpcError, response: HelloReply) => {
        console.log(response.getMessage())
    })
    call.on('status', (status: grpcWeb.Status) => {
        console.log('status', status)
    })

    const call2 = service.sayList(req, {})
    call2.on("data", (resp:any) => {
        console.log("streaming data:")
        console.log(resp['array'])
    })

}
