import React, {useState, useEffect, FC} from 'react'

import './page-404.scss'
import PNG_404 from './image/404.png'
import PNG_ARROW_RIGHT from './image/arrow-right.png'
import {auth_login_out} from "../../../../../../utils/auth/auth";
import {ROUTE_APP} from "../../../../../register-center/route/route-register-center";

interface Page404Props {

}
export const Page404: FC<Page404Props> = (props) => {

    //声明count,并初始化为0
    const [count, setCount] = useState(0)



    let handleClickReturnHome = () => {
        // if (!check_localstorage()) {
        //     g_tip_v2("安全升级，已清除登录缓存，请重新登录")
       auth_login_out()
        // }
        // localStorage.clear()
        window.location.replace(`${ROUTE_APP[0]}/}`)
        // window.location.replace ( "http://www.example.com/anotherpage.html" )
    }

    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error :({error.message}</p>

    return <article className={"page-404"}>
        <header></header>
        <section>
            <article>
                {/*<section>抱歉，您访问的页面不存在</section>*/}
                <section>
                    <img src={PNG_404}/>
                </section>
                <footer>
                    <button onClick={handleClickReturnHome}>返回首页&nbsp;<img src={PNG_ARROW_RIGHT}/></button>
                </footer>
            </article>
        </section>
        <footer></footer>
    </article>
}

Page404.defaultProps = {}
export {Page404 as default} from "./page-404"
