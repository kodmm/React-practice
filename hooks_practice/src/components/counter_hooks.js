import React, { useState } from 'react'
import '../styles/counter.css'
import axios from 'axios'
const Counter_hooks = () => {
    const initialState = Math.floor(Math.random() * 10) + 1

    const [count, setCount] = useState(initialState)

    const [open, setOpen] = useState(true)

    const toggle = () => setOpen(!open)
    
    axios.get('https://www.metaweather.com/api/location/1118370/2021/03/02/')
        .then(res => console.log(res.json))
    return (
        <>
            <button onClick={toggle}>{open ? 'close' : 'open'}</button>
            <div className={open ? 'isOpen' : 'isClose'}>
                <p>現在の数字は{count}です。</p>
                <button onClick={() => setCount(prevState => prevState +1)}>
                    +1
                </button>
                <button onClick={() => setCount(count -1 )}>-1</button>
                <button onClick={() => setCount(0)}>0</button>
                <button onClick={()=> setCount(initialState)}>最初の数値に戻す</button>
            </div>
        </>
    )
        
}

export default Counter_hooks

