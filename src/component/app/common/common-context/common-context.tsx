import React,{FC,useState,useEffect,Fragment} from "react";
import {Routes, useNavigate,useLocation, Route} from 'react-router-dom'
import {useLazyQuery} from "@apollo/react-hooks";
import MediaQuery from 'react-responsive'
import PortalLogin from "../../../component/portal/portal-login/portal-login";

interface CommonContextProps {

}

export const CommonContext:FC<CommonContextProps>=(props)=>{
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
    return <article className={"common-context"}>
<PortalLogin/>
首页
            </article>
}

CommonContext.defaultProps={}
export {CommonContext as default} from './common-context'
