import React,{FC,useState,useEffect,Fragment} from "react";
import {useNavigate,useLocation} from 'react-router-dom'
import {useLazyQuery} from "@apollo/react-hooks";
import MediaQuery from 'react-responsive'
import './catalog-terminal.scss'

interface CatalogTerminalProps {

}

export const CatalogTerminal:FC<CatalogTerminalProps>=(props)=>{
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
            <article className={"catalog-terminal"}>
                PC端:命令行
            </article>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1200px)'>
            <article className={'mobile-catalog-terminal'}>
                移动端
            </article>
        </MediaQuery>
    </Fragment>
}

CatalogTerminal.defaultProps={}
export {CatalogTerminal as default} from './catalog-terminal'
