import React,{FC,useState,useEffect,Fragment} from "react";
import {useNavigate, useLocation, Route, Routes} from 'react-router-dom'
import {useLazyQuery} from "@apollo/react-hooks";
import MediaQuery from 'react-responsive'
import './system-check.scss'
import CheckLog from "./check-log/check-log";
import CheckProcess from "./check-process/check-process";
import CheckReport from "./check-report/check-report";
import CheckHealth from "./check-health/check-health";

interface SystemCheckProps {

}

export const SystemCheck:FC<SystemCheckProps>=(props)=>{
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
            <article className={"system-check"}>
                <section>
                    <Routes>
                        <Route path={"log"} element={<CheckLog/>}/>
                        <Route path={"process"} element={<CheckProcess/>}/>
                        <Route path={"report"} element={<CheckReport/>}/>
                        <Route path={"health"} element={<CheckHealth/>}/>
                    </Routes>
                </section>
            </article>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1200px)'>
            <article className={'mobile-system-check'}>
                移动端
            </article>
        </MediaQuery>
    </Fragment>
}

SystemCheck.defaultProps={}
export {SystemCheck as default} from './system-check'
