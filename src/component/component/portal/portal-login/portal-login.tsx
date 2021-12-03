import React, {FC, useState, useEffect, Fragment} from "react";
import {createPortal} from 'react-dom'
import {useNavigate, useLocation} from 'react-router-dom'
import MediaQuery from 'react-responsive'
import './portal-login.scss'
import PNG_SHOW from './image/show.png'

interface PortalLoginProps {

}

export const PortalLogin: FC<PortalLoginProps> = (props) => {
    const [data, setData] = useState(null)
    const [isReady, setIsReady] = useState<boolean>(false)

    //useRoute
    const location = useLocation()
    const navigate = useNavigate()
    //useGraphql
    // const [get,{data,error}]=useLazyQuery()
    // useEffect
    useEffect(() => {
        setIsReady(true)
    }, [])

    if (!isReady) return null
    return createPortal(<Fragment>
        <MediaQuery query='(min-device-width: 1200px)'>
            <article className={"portal-login"}>
                <section>
                    <article>
                        <aside>
                            <img src={PNG_SHOW}/>
                        </aside>
                        <section>
                            <article>
                                <header>
                                    <div>
                                        身份登录
                                    </div>
                                    <div>翰云资源管理器</div>
                                </header>
                                <section>
                                    <div>
                                        <input/>
                                    </div>
                                    <div>
                                        <input/>
                                    </div>
                                    <div>
                                        <div>
                                            <div><input type={'checkbox'}/></div>
                                            <div>更改服务器地址</div>
                                        </div>
                                        <div>
                                            <input/>
                                        </div>
                                    </div>
                                </section>
                            </article>
                        </section>
                    </article>
                </section>
            </article>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1200px)'>
            <article className={'mobile-portal-login'}>
                移动端
            </article>
        </MediaQuery>
    </Fragment>, document.body)
}

PortalLogin.defaultProps = {}
export {PortalLogin as default} from './portal-login'
