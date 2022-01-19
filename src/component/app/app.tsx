import React, {FC, useState, useEffect, Suspense, useContext} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './app.scss'
import CommonContext from "./common/common-context/common-context";
import usePxToRem from "../../hooks/px-to-rem/usePxToRem";
import {ContextAuth} from "../../register-center/context/auth/context-auth";
import {ErrorBoundary} from "./common/common-exception/error-boundary/error-boundary";

interface AppProps {

}

export const App: FC<AppProps> = (props) => {
    const contextAuth = useContext(ContextAuth)
    const [auth, setAuth] = useState({...contextAuth[0]})
    const [data, setData] = useState(null)
    const [isReady, setIsReady] = useState<boolean>(false)
    const [isMobile] = usePxToRem()
    useEffect(() => {
        setIsReady(true)
    }, [])

    if (!isReady) return null
    return <article className={"app"}>
        <Router>
            <Suspense fallback={<div>loading</div>}>
                <ErrorBoundary>
                    <ContextAuth.Provider value={[auth, setAuth]}>
                        <CommonContext/>
                    </ContextAuth.Provider>
                </ErrorBoundary>
            </Suspense>
        </Router>
    </article>
}
App.defaultProps = {}
export {App as default} from './app'
