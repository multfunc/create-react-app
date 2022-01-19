import React,{FC,useState,useEffect,Fragment} from "react";
import {useNavigate,useLocation} from 'react-router-dom'
import {useLazyQuery} from "@apollo/react-hooks";
import MediaQuery from 'react-responsive'
import './session-task.scss'

interface SessionTaskProps {

}

export const SessionTask:FC<SessionTaskProps>=(props)=>{
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
            <article className={"session-task"}>
                {"系统会话 -> 任务状态"}
            </article>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1200px)'>
            <article className={'mobile-session-task'}>
                移动端
            </article>
        </MediaQuery>
    </Fragment>
}

SessionTask.defaultProps={}
export {SessionTask as default} from './session-task'
