import React,{FC,useState,useEffect,Fragment} from "react";
import {useNavigate, useLocation, Routes, Route} from 'react-router-dom'
import {useLazyQuery} from "@apollo/react-hooks";
import MediaQuery from 'react-responsive'
import './system-session.scss'
import SessionTask from "./session-task/session-task";
import SessionOnline from "./session-online/session-online";

interface SystemSessionProps {

}

export const SystemSession:FC<SystemSessionProps>=(props)=>{
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
            <article className={"system-session"}>
                <section>
                    <Routes>
                        <Route path={"task"} element={<SessionTask/>}/>
                        <Route path={"online"} element={<SessionOnline/>}/>
                    </Routes>
                </section>
                PC端:系统会话
            </article>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1200px)'>
            <article className={'mobile-system-session'}>
                移动端
            </article>
        </MediaQuery>
    </Fragment>
}

SystemSession.defaultProps={}
export {SystemSession as default} from './system-session'
