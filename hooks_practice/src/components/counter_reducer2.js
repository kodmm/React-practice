//Stateが単数

import React, { useReducer } from 'react';

const initialState = 0;

const reducerFunc = (countState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            
            return countState + 1
        case 'DECREMENT':

            return countState - 1
        case 'RESET':
            return initialState
        default:
            return countState 
    }
}

const Counter = () => {

    const [count, dispatch] = useReducer(reducerFunc, initialState)


    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
            <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
        </div>
    )
}

export default Counter
