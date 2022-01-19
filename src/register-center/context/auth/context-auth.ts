import React from 'react'

type TAuth = {
    meta: {
        isLogin: boolean
    },
    data:any
}
type TAuthSet = any
/*************** ContextAuth ******************/
export const ContextAuth = React.createContext<[TAuth,TAuthSet]>([
    {
        meta: {
            isLogin: false,// 是否登录
        },
        data: null
    },
    null
])
/*************** ContextAuth ******************/
