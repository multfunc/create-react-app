import React, {FC, useState, useEffect, Fragment} from "react";
import {useNavigate, useLocation, Route, Routes, Link} from 'react-router-dom'
import {useLazyQuery} from "@apollo/react-hooks";
import MediaQuery from 'react-responsive'
import './system.scss'
import SystemOverview from "./system-overview/system-overview";
import SVG_SESSION from './image/session.svg'
import SVG_CHECK from './image/check.svg'
import SVG_CONFIG from './image/config.svg'
import SVG_OVERVIEW from './image/overview.svg'
import SVG_RESOURCE from './image/resource.svg'
import SVG_ARROW_BOTTOM from './image/arrow_bottom.svg'
import SVG_ARROW_LEFT from './image/arrow_left.svg'

// import SVG_ARROW_RI

interface SystemProps {

}

type TNavItem = [string, string, string, boolean, TNavItem][]
export const System: FC<SystemProps> = (props) => {
    const [data, setData] = useState<TNavItem>([
        ["概览信息", "overview", SVG_OVERVIEW, true, []],
        ["系统资源", "resource/server", SVG_RESOURCE, false,
            [
                ["服务器", "resource/server", "", false, []],
                ["处理器", "resource/cpu", "", true, []],
                ["内存", "resource/memory", "", false, []],
                ["网络", "resource/network", "", false, []],
                ["存储", "resource/storage", "", false, []],
            ]
        ],
        ["系统会话", "session/online", SVG_SESSION, false,
            [
                ["在线会话", "session/online", "", false, []],
                ["任务状态", "session/task", "", true, []],
            ]
        ],
        ["系统配置", "config/param", SVG_CONFIG, true,
            [
                ["配置选项", "config/param", "", false, []],
                ["软件升级", "config/update", "", true, []],
                ["许可证升级", "config/license", "", false, []],
                ["系统重启", "config/reboot", "", false, []],
            ]
        ],
        ["系统诊断", "check/health", SVG_CHECK, false,
            [
                ["健康诊断", "check/health", "", false, []],
                ["进程监控", "check/process", "", true, []],
                ["状态报告", "check/report", "", false, []],
                ["日志监控", "check/log", "", false, []],
            ]
        ],
    ])
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

    /*************** 点击导航 ******************/
    function handleClickNav(index: number, index_index: number) {
        let tmp = [...data]
        for (let i = 0; i < tmp.length; i++) {
            tmp[i][3] = false
            for (let j = 0; j < tmp[i][4].length; j++) {
                tmp[i][4][j][3] = false
            }
        }
        tmp[index][3] = true
        if (tmp[index][4].length > 0) {
            tmp[index][4][index_index][3] = true
        }
        setData(tmp)
    }

    /*************** 点击导航 ******************/

    if (!isReady) return null
    return <Fragment>
        <MediaQuery query='(min-device-width: 1200px)'>
            <article className={"system"}>
                <section>
                    {
                        data.map((item, index) => {
                            return <Fragment>
                                <article key={index} className={'link'} onClick={() => handleClickNav(index, 0)}>
                                    <header
                                        className={item[3] && item[4].length === 0 ? 'active-single' : item[3] ? 'active' : ""}>
                                        <div><img src={item[2]}/></div>
                                    </header>
                                    <section
                                        className={item[3] && item[4].length === 0 ? 'active-single' : item[3] ? 'active' : ""}>
                                        <div>
                                            <Link to={item[1]}>{item[0]}</Link>
                                        </div>
                                    </section>
                                    <footer
                                        className={item[3] && item[4].length === 0 ? 'active-single' : item[3] ? 'active' : ""}>
                                        <div>
                                            <img src={item[3] ? SVG_ARROW_BOTTOM : SVG_ARROW_LEFT}/>
                                        </div>
                                    </footer>
                                </article>
                                {
                                    item[3] && item[4].length > 0 && <article className={'link-level-2'}>
                                        <section>
                                            {
                                                item[4].map((item_item, index_index) => {
                                                    return <Fragment key={index_index}>
                                                        <article className={item_item[3] ? 'active' : ''}
                                                                 onClick={() => handleClickNav(index, index_index)}>
                                                            <section>
                                                                <div>
                                                                    <Link to={item_item[1]}>
                                                                        {item_item[0]}
                                                                    </Link>
                                                                </div>
                                                            </section>
                                                            <footer>
                                                                <div>
                                                                    <img src={SVG_ARROW_LEFT}/>
                                                                </div>
                                                            </footer>
                                                        </article>
                                                        <div className={item_item[3] ? 'active' : 'blank'}>

                                                        </div>
                                                    </Fragment>
                                                })
                                            }
                                        </section>
                                    </article>
                                }

                            </Fragment>
                        })
                    }
                </section>
            </article>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1200px)'>
            <article className={'mobile-system'}>
                移动端
            </article>
        </MediaQuery>
    </Fragment>
}

System.defaultProps = {}
export {System as default} from './system'
