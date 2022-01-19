import React, {FC, useState, useEffect, Fragment, ChangeEvent, useContext} from "react";
import {createPortal} from 'react-dom'
import {useNavigate, useLocation} from 'react-router-dom'
import MediaQuery from 'react-responsive'
import './portal-login.scss'
import PNG_SHOW from './image/show.png'
import PNG_LOGO_LOGIN from './image/logo_login.png'
import {ContextAuth} from "../../../../register-center/context/auth/context-auth";
import {testGrpc} from "../../../../grpc/proto/client_grpc";
import {rpcLogin} from "../../../../grpc/proto/instances/auth/rpc_client_auth";

interface PortalLoginProps {

}

export const PortalLogin: FC<PortalLoginProps> = (props) => {
    const [auth, setAuth] = useContext(ContextAuth)
    const [data, setData] = useState({
        input_account: {
            is_display_title: false,
            value: "",
        },
        input_password: {
            is_display_title: false,
            value: "",
        },
        input_address_checkbox: {
            value: false
        },
        input_address: {
            is_display: false,
            value: "",
        }
    })
    const [isReady, setIsReady] = useState<boolean>(false)

    //useRoute
    const location = useLocation()
    const navigate = useNavigate()
    //useGraphql
    // const [get,{data,error}]=useLazyQuery()
    // useEffect
    useEffect(() => {
        console.log("auth: ", auth)
        if (auth.meta.isLogin) {
            setIsReady(false)
            console.log("grpc starting")
            // testGrpc()
            ;(async () => {
                let resp = await rpcLogin()
                console.log("code: ", resp.getCode())
                console.log("msg: ", resp.getMsg())
                console.log("sessionId: ", resp.getContent()?.getSessionId())
                console.log("sessionSequence: ", resp.getContent()?.getSessionSequence())
                console.log("sessionToken: ", resp.getContent()?.getToken())

            })()
            console.log("grpc end")
        } else {
            setIsReady(true)
        }

    }, [auth.meta.isLogin])

    /*************** 修改 data ******************/
    function handleChangeData(e: ChangeEvent<HTMLInputElement>, type: "input_password" | "input_account" | "input_address" | "input_address_checkbox") {
        console.log(type)
        let tmp = {...data}
        switch (type) {
            case "input_password":
            case "input_account":
                tmp[type].value = e.target.value.trim()
                if (tmp[type].value === "") {
                    tmp[type].is_display_title = false
                } else {
                    tmp[type].is_display_title = true
                }
                break
            case "input_address_checkbox":
                tmp[type].value = e.target.checked
                break
            case "input_address":
                tmp[type].value = e.target.value.trim()
                break
            default:
                console.error(`unknown type -> ${type}`)
        }
        setData(tmp)
    }

    /*************** 修改 data ******************/

    /*************** 登录 ******************/
    async function handleLogin() {

        let tmp = {...auth}
        tmp.meta.isLogin = true
        setAuth(tmp)
    }

    /*************** 登录 ******************/

    if (!isReady) return null
    return createPortal(<Fragment>
        <MediaQuery query='(min-device-width: 1200px)'>
            <article className={"portal-login"}>
                <section>
                    <article>
                        <aside>
                            <img src={PNG_SHOW}/>
                        </aside>
                        <section>
                            <article>
                                <header>
                                    <div>
                                        <img src={PNG_LOGO_LOGIN}/>
                                    </div>
                                    <div>
                                        <label>翰云资源管理器</label>
                                    </div>
                                </header>
                                <aside>
                                    <div>
                                        身份登录
                                    </div>
                                    <div>翰云资源管理器</div>
                                </aside>
                                <section>
                                    <div>
                                        <div>{data.input_account.is_display_title && "输入账号"}</div>
                                        <input placeholder={"输入账号"}
                                               onChange={(e) => handleChangeData(e, "input_account")}
                                               value={data.input_account.value}/>
                                    </div>
                                    <div>
                                        <div>{data.input_password.is_display_title && "输入密码"}</div>
                                        <input type={"password"} placeholder={"输入密码"}
                                               onChange={(e) => handleChangeData(e, "input_password")}
                                               value={data.input_password.value}/>
                                    </div>
                                    <div>
                                        <div>
                                            <input type={'checkbox'}
                                                   onChange={(e) => handleChangeData(e, "input_address_checkbox")}
                                                   checked={data.input_address_checkbox.value}/>
                                            <label>更改服务器地址？</label>
                                        </div>
                                        <input style={data.input_address_checkbox.value ? {} : {display: "none"}}
                                               onChange={(e) => handleChangeData(e, "input_address")}
                                               value={data.input_address.value}/>
                                    </div>
                                </section>
                                <footer>
                                    <button onClick={handleLogin}>登录</button>
                                </footer>
                            </article>
                        </section>
                    </article>
                </section>
            </article>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1200px)'>
            <article className={'mobile-portal-login'}>
                移动端
            </article>
        </MediaQuery>
    </Fragment>, document.body)
}

PortalLogin.defaultProps = {}
export {PortalLogin as default} from './portal-login'
