import React,{FC,useState,useEffect,Fragment} from "react";
import {useNavigate,useLocation} from 'react-router-dom'
import {useLazyQuery} from "@apollo/react-hooks";
import MediaQuery from 'react-responsive'
import './config-reboot.scss'

interface ConfigRebootProps {

}

export const ConfigReboot:FC<ConfigRebootProps>=(props)=>{
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
            <article className={"config-reboot"}>
                {"系统配置 -> 系统重启"}
            </article>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1200px)'>
            <article className={'mobile-config-reboot'}>
                移动端
            </article>
        </MediaQuery>
    </Fragment>
}

ConfigReboot.defaultProps={}
export {ConfigReboot as default} from './config-reboot'
