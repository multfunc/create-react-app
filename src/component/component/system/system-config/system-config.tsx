import React,{FC,useState,useEffect,Fragment} from "react";
import {useNavigate, useLocation, Route, Routes} from 'react-router-dom'
import {useLazyQuery} from "@apollo/react-hooks";
import MediaQuery from 'react-responsive'
import './system-config.scss'
import ConfigUpdate from "./config-update/config-update";
import ConfigLicense from "./config-license/config-license";
import ConfigReboot from "./config-reboot/config-reboot";
import ConfigParam from "./config-param/config-param";

interface SystemConfigProps {

}

export const SystemConfig:FC<SystemConfigProps>=(props)=>{
    const [data,setData]=useState(null)
    const [isReady,setIsReady]=useState<boolean>(false)

    //useRoute
    const location=useLocation()
    const navigate=useNavigate()
    //useGraphql
    // const [get,{data,error}]=useLazyQuery()
    // useEffect
    useEffect(()=>{
        setIsReady(true)
    },[])

    if(!isReady) return null
    return <Fragment>
        <MediaQuery query='(min-device-width: 1200px)'>
            <article className={"system-config"}>
                <section>
                    <Routes>
                        <Route path={"update"} element={<ConfigUpdate/>}/>
                        <Route path={"license"} element={<ConfigLicense/>}/>
                        <Route path={"reboot"} element={<ConfigReboot/>}/>
                        <Route path={"param"} element={<ConfigParam/>}/>

                    </Routes>
                </section>
            </article>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1200px)'>
            <article className={'mobile-system-config'}>
                移动端
            </article>
        </MediaQuery>
    </Fragment>
}

SystemConfig.defaultProps={}
export {SystemConfig as default} from './system-config'
