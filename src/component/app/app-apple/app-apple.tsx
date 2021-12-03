import React,{FC,useState,useEffect,Fragment} from "react";
import {useNavigate,useLocation} from 'react-router-dom'
import './app-apple.scss'

interface AppAppleProps {

}

export const AppApple:FC<AppAppleProps>=(props)=>{
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
    return <article className={"app-apple"}>
                PC端
            </article>
}

AppApple.defaultProps={}
export {AppApple as default} from './app-apple'
