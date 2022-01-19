import {AuthClient} from "./AuthServiceClientPb";
import {SERVER_RPC_AUTH} from "../../data_from_rpc";
import {ReqAuth, ReqContentLogin, RespAuth} from "./auth_pb";
import {encrypt_go} from "../../../../utils/security_utils/encrypt_go/encrypt_go";

const service = new AuthClient(SERVER_RPC_AUTH, null, null)

const reqAuth = new ReqAuth()
const respAuth = new RespAuth()

reqAuth.setFi("test_id")
reqAuth.setFn("test_nickname")
const reqContentLogin = new ReqContentLogin()
reqContentLogin.setUser("system")
reqContentLogin.setAddress("127.0.0.1:1978")
reqContentLogin.setPassword(encrypt_go("CHANGEME"))
reqAuth.setC(reqContentLogin)

export async function rpcLogin():Promise<RespAuth> {
    return new Promise<RespAuth>((resolve, reject) => {
        const call = service.authLogin(reqAuth, {}, (err, response) => {
            console.log("err code: ", err)
            // if (err.code !== 9) {
            //     reject(err.stack)
            // }
            resolve(response)
        })
    })
}
