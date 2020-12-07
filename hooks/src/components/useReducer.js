import React, { useReducer } from 'react';

/*
//counterの初期値を0に設定
const initialState = 0

//reducer関数を作成
//countStateとactionを渡して、新しいcountStateを返すように実装する
const reducerFunc = (count, action) => {
    //reducer関数にincrement, increment, reset処理を書く
    //どの処理をするかはactionを渡すことにより判断する
    switch (action) {
        case 'increment':
            return count + 1
        case 'decrement':
            return count - 1
        case 'reset':
            return initialState
        default:
            return count
    }
}

const Counter = () => {
    //作成したreducerFunc関数とcountStateをuseReducerに渡す
    //useReducerはcountStateとdispathをペアで返すので、それぞれを分割代入
    const [count, dispatch] = useReducer(reducerFunc, initialState)
    //カウント数とそれぞれのactionを実行する<button>を設置する
    return(
        <>
            <h2>カウント：{count}</h2>
            <div>
                <button onClick = {() => dispatch('increment')}>increment</button>
                <button onClick = {() => dispatch('decrement')}>decrement</button>
                <button onClick = {() => dispatch('reset')}>reset</button>
            </div>
        </>
    )
}

*/

const initialState = {count: 0}

function reducer(state, action) {
    switch(action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default: 
            throw new Error();
    }

}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <>
            <h1>stateが単数</h1>
            Count: {state.count}
            <button onClick = {() => dispatch({type: 'decrement'})} >-</button>
            <button onClick = {() => dispatch({type: 'increment'})}>+</button>
        </>
    )
}

export default Counter
