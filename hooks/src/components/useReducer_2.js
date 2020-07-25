import React, { useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState = {
    isLoading: true,
    isError: '',
    post: {}
}

const dataFetchReducer = (dataState, action) => {
    switch(action.type){
        case 'FETCH_INIT':
            return {
                isLoading: true,
                isError: '',
                post:{}
                
            }
        case 'FETCH_SUCCESS':
            return {
                isLoading: false,
                isError: '',
                post: action.payload
                
            }
        case 'FETCH_ERROR':
            return {
                isLoading: false,
                post: {},
                isError: '読み込みに失敗しました。'
            }
        
        default: 
            return dataState
    }
}

const App = () => {
    const [dataState, dispatch] = useReducer(dataFetchReducer, initialState)

    useEffect(() => {
        //http getリクエストを記述
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        //リクエストに成功した場合
        .then(res =>{
            //dispatch関数をよぶ
            dispatch({type: 'FETCH_SUCCESS', payload: res.data})
            
        })
        //リクエストに失敗した場合catchの中に入ってくる
        .catch(err => {
            dispatch({type: 'FETCH_ERROR'})
        })
    })

    return(
        <div>
            //loadingが終わったら記事のタイトルを表示
            <h3>{dataState.isLoading ? 'Lodding...': dataState.post.title}</h3>
            //エラー時
            <p>{dataState.isError ? dataState.isError: null}</p>
        </div>
    )
}

export default App