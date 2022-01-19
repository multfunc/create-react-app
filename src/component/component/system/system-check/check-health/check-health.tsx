import React,{FC,useState,useEffect,Fragment} from "react";
import {useNavigate,useLocation} from 'react-router-dom'
import {useLazyQuery} from "@apollo/react-hooks";
import MediaQuery from 'react-responsive'
import './check-health.scss'

interface CheckHealthProps {

}

export const CheckHealth:FC<CheckHealthProps>=(props)=>{
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
            <article className={"check-health"}>
                {"系统诊断 -> 健康状态"}
            </article>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1200px)'>
            <article className={'mobile-check-health'}>
                移动端
            </article>
        </MediaQuery>
    </Fragment>
}

CheckHealth.defaultProps={}
export {CheckHealth as default} from './check-health'
