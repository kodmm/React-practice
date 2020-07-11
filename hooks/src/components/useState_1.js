import React, { useState } from 'react'
import './useState.css'
import { Link } from 'react-router-dom'

const useState_1 = () => {
    
    const initialState = Math.floor(Math.random()* 10) + 1
    //countという名前のstateを宣言,初期値 initialStateをセット
    const [count, setCount] = useState(initialState)
    // openという名前のstateを宣言,初期値を trueをセット
    const [open, setOpen] = useState(true)
    //toggleの関数を宣言
    const toggle = () => setOpen(!open)

    return(
        <>
            <h1>関数コンポーネント</h1>
            <button onClick={toggle}>{open ? 'close': 'open'}</button>
            <div className={open ? 'isOpen': 'isClose'} >
                <p>現在の数字は{count}です</p>
                {/* setCount()は、countを更新するための関数。countを引数で受け取ることもできる */}
                
                <button onClick={() => setCount(prevState => prevState + 1)}>
                    + 1
                </button>
                <button onClick={() => setCount(count - 1)}>- 1 </button>
                <button onClick={() => setCount(0)}>0</button>
                <button onClick={() => setCount(initialState)}>最初の数値に戻す</button>
            </div>
            <Link to="/">クラスコンポーネントへ！</Link>
        </>
    )
}

export default useState_1