import React,{useState} from 'react'
import './app.css'

export const App =()=>{
const [data, setData] = useState(null)
    return <article className={'app'}>
        PC端 hello webpack hh
    </article>
}

export {App as default}
