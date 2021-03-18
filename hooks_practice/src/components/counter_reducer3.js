//Stateが複数

import React, { useReducer } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}

const reducerFunc = (countState, action) => {
    switch(action.type) {
        case 'INCREMENT1':
            return {...countState, firstCounter: countState.firstCounter + action.value}
        case 'DECREMENT1':
            return {...countState, firstCounter: countState.firstCounter - action.value}
        case 'INCREMENT2':
            return {...countState, secondCounter: countState.secondCounter - action.value}
        case 'DECREMENT2':
            return {...countState, secondCounter: countState.secondCounter - action.value}
        case 'RESET1':
            return {...countState, firstCounter: initialState.firstCounter}
        case 'RESET2':
            return {...countState, secondCounter: initialState.secondCounter}
        default:
            return countState
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducerFunc, initialState)

    return(
        <div>
            <h2>Count: {count.firstCounter}</h2>
            <ButtonGroup color="primary" arialabel="outlined primary button group">
                <Button onClick={() => dispatch({type: 'INCREMENT1', value: 1})}>increment 1</Button>
                <Button onClick={() => dispatch({type: 'DECREMENT1', value: 1})}>decrement 1</Button>
                <Button onClick={() => dispatch({type: 'RESET1'})}>reset 1</Button>
            </ButtonGroup>
            <h2>Count2: {count.secondCounter}</h2>
            <ButtonGroup color="secondary"　arialabel="outlined secondary button group">
                <Button onClick={() => dispatch({type: 'INCREMENT2', value: 100})}>increment 2</Button>
                <Button onClick={() => dispatch({type: 'DECREMENT2', value: 100})}>decrement 2</Button>
                <Button onClick={() => dispatch({type: 'RESET2'})}>reset 2</Button>
            </ButtonGroup>
        </div>
    )
}

export default Counter