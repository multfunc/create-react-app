import React,{FC,useState,useEffect,Fragment} from "react";
import {useNavigate,useLocation} from 'react-router-dom'
import {useLazyQuery} from "@apollo/react-hooks";
import MediaQuery from 'react-responsive'
import './resource-storage.scss'

interface ResourceStorageProps {

}

export const ResourceStorage:FC<ResourceStorageProps>=(props)=>{
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
            <article className={"resource-storage"}>
                {"系统资源 -> 存储"}
            </article>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1200px)'>
            <article className={'mobile-resource-storage'}>
                移动端
            </article>
        </MediaQuery>
    </Fragment>
}

ResourceStorage.defaultProps={}
export {ResourceStorage as default} from './resource-storage'
