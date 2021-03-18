import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState = {
    isLoading: true,
    isError: '',
    post: {}
}

const dataFetchReducer = (dataState, action) => {
    switch(action.type) {
        case 'FETCH_INIT':
            return initialState
        case 'FETCH_SUCCESS':
            return {
                isLoading: false,
                post: action.payload,
                isError: ''
            }
        case 'FETCH_ERROR':
            return {
                isLoading: false,
                post: {},
                isError: '読み込みに失敗しました'
            }
        default:
            return dataState
    }
}

const Counter = () => {
    const [dataState, dispatch] = useReducer(dataFetchReducer, initialState)

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            dispatch({type: 'FETCH_SUCCESS', payload: res.data})
        })
        .catch(err => {
            dispatch({type: 'FETCH_ERROR'})
        })
    })
    return(
        <div>
            <div className="App">
                <h3>{dataState.isLoading ? 'Loading...': dataState.post.title}</h3>
                <p>{dataState.isError ? 'dataState.isError': null}</p>
            </div>
        </div>
    )
}


export default Counter