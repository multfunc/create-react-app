import React,{FC,useState,useEffect,Fragment} from "react";
import {useNavigate, useLocation, Routes, Route} from 'react-router-dom'
import {useLazyQuery} from "@apollo/react-hooks";
import MediaQuery from 'react-responsive'
import './system-resource.scss'
import ResourceServer from "./resource-server/resource-server";
import ResourceCpu from "./resource-cpu/resource-cpu";
import ResourceMemory from "./resource-memory/resource-memory";
import ResourceNetwork from "./resource-network/resource-network";
import ResourceStorage from "./resource-storage/resource-storage";

interface SystemResourceProps {

}

export const SystemResource:FC<SystemResourceProps>=(props)=>{
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
            <article className={"system-resource"}>
                <header></header>
                <section>
                    <Routes>
                        <Route path={"server"} element={<ResourceServer/>}/>
                        <Route path={"cpu"} element={<ResourceCpu/>}/>
                        <Route path={"memory"} element={<ResourceMemory/>}/>
                        <Route path={"network"} element={<ResourceNetwork/>}/>
                        <Route path={"storage"} element={<ResourceStorage/>}/>
                    </Routes>
                </section>
            </article>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1200px)'>
            <article className={'mobile-system-resource'}>
                移动端
            </article>
        </MediaQuery>
    </Fragment>
}

SystemResource.defaultProps={}
export {SystemResource as default} from './system-resource'
