import React,{FC,useState,useEffect,Fragment} from "react";
import {useNavigate,useLocation} from 'react-router-dom'
import {useLazyQuery} from "@apollo/react-hooks";
import MediaQuery from 'react-responsive'
import './database-catalog.scss'

interface DatabaseCatalogProps {
    
}

export const DatabaseCatalog:FC<DatabaseCatalogProps>=(props)=>{
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
            <article className={"database-catalog"}>
                PC端
            </article>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1200px)'>
            <article className={'mobile-database-catalog'}>
                移动端
            </article>
        </MediaQuery>
    </Fragment>
}

DatabaseCatalog.defaultProps={}
export {DatabaseCatalog as default} from './database-catalog'
