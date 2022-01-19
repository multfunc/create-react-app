import React,{FC,useState,useEffect,Fragment} from "react";
import {useNavigate,useLocation} from 'react-router-dom'
import {useLazyQuery} from "@apollo/react-hooks";
import MediaQuery from 'react-responsive'
import './resource-cpu.scss'

interface ResourceCpuProps {

}

export const ResourceCpu:FC<ResourceCpuProps>=(props)=>{
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
            <article className={"resource-cpu"}>
                {"系统资源 -> 处理器"}PC端
            </article>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1200px)'>
            <article className={'mobile-resource-cpu'}>
                移动端
            </article>
        </MediaQuery>
    </Fragment>
}

ResourceCpu.defaultProps={}
export {ResourceCpu as default} from './resource-cpu'
