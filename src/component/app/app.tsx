import React,{FC,useState, useEffect,Suspense} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './app.scss'
import CommonContext from "./common/common-context/common-context";
import usePxToRem from "../../hooks/px-to-rem/usePxToRem";
interface AppProps {

}
export const App: FC<AppProps>  =(props)=>{
const [data, setData] = useState(null)
    const [isReady,setIsReady]=useState<boolean>(false)
    const [isMobile] = usePxToRem()
    useEffect(()=>{
        setIsReady(true)
    },[])

    if(!isReady) return null
    return <article className={"app"}>
        <Router>
            <Suspense fallback={<div>loading</div>}>
                <CommonContext/>
            </Suspense>
        </Router>
    </article>
}
App.defaultProps = {}
export {App as default} from './app'
