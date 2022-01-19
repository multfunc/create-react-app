import React, {FC, useState, useEffect, Fragment, useContext} from "react";
import {useNavigate, useLocation, Routes, Route, Link} from 'react-router-dom'
import './app-apple.scss'
import System from "../../component/system/system";
import Database from "../../component/database/database";
import PNG_LOGO_WHITE from "./image/logo_white.png"
import SVG_FOLD from './image/fold.svg'
import SVG_UNFOLD from './image/unfold.svg'
import PNG_NAME from './image/name.png'
import SystemOverview from "../../component/system/system-overview/system-overview";
import DatabaseCatalog from "../../component/database/database-catalog/database-catalog";
import SVG_LOGIN_OUT from './image/login_out.svg'
import ResourceServer from "../../component/system/system-resource/resource-server/resource-server";
import SystemResource from "../../component/system/system-resource/system-resource";
import SystemCheck from "../../component/system/system-check/system-check";
import SystemConfig from "../../component/system/system-config/system-config";
import SystemSession from "../../component/system/system-session/system-session";
import {ContextAuth} from "../../../register-center/context/auth/context-auth";

interface AppAppleProps {

}

export const AppApple: FC<AppAppleProps> = (props) => {
    const [auth, setAuth] = useContext(ContextAuth)
    const [data, setData] = useState(
        {
            isNavFold: false,//导航菜单是否折叠

        }
    )
    const [isReady, setIsReady] = useState<boolean>(false)

    //useRoute
    const location = useLocation()
    const navigate = useNavigate()
    //useGraphql
    // const [get,{data,error}]=useLazyQuery()
    // useEffect
    useEffect(() => {
        setIsReady(true)
    }, [])

    function handleLoginOut() {
        let tmp = {...auth}
        tmp.meta.isLogin = false
        setAuth(tmp)
    }

    if (!isReady) return null
    return <article className={"app-apple"}>
        <header>
            <article>
                <header className={'name'}>
                    <div><img src={PNG_LOGO_WHITE}/></div>
                    <div><img src={PNG_NAME}/></div>
                    <div><img src={SVG_FOLD}/></div>
                </header>
                <aside className={"main"}>
                    <div>
                        <div className={'active'}><Link to={"system"}>系统</Link></div>
                        <div><Link to={"database"}>对象</Link></div>
                    </div>
                </aside>
                <section>
                    <Routes>
                        <Route path={"/"} element={<System/>}/>
                        <Route path={"system/*"} element={<System/>}/>
                        <Route path={"database"} element={<Database/>}/>
                    </Routes>
                </section>
            </article>
        </header>
        <section>
            <article>
                <header>
                    <div>
                        <label>SYSTEM@127.0.0.1</label>
                    </div>
                    <div onClick={handleLoginOut}>
                        <div>
                            <img src={SVG_LOGIN_OUT}/>
                        </div>
                        <div>
                            <label>退出系统</label>
                        </div>
                    </div>
                </header>
                <section>
                    <Routes>
                        <Route path={"system/overview/*"} element={<SystemOverview/>}/>
                        <Route path={"system/resource/*"} element={<SystemResource/>}/>
                        <Route path={"system/check/*"} element={<SystemCheck/>}/>
                        <Route path={"system/config/*"} element={<SystemConfig/>}/>
                        <Route path={"system/session/*"} element={<SystemSession/>}/>
                        <Route path={"database"} element={<Database/>}/>
                    </Routes>
                </section>

            </article>

        </section>
    </article>
}

AppApple.defaultProps = {}
export {AppApple as default} from './app-apple'
