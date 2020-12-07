import React from 'react';
import './useState.css';
import { Link } from 'react-router-dom';

//constの初期値として、1~10までのランダムな数値を生成
const initialState = Math.floor(Math.random() * 10) + 1

class useState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //クラスではコンストラクト内で、this.stateの初期値{ count: intialState }をセット
            count: initialState,
            //this.stateの初期値{ open: false} をセット
            open: true
        }
    }

    //toggleメソッドを作成
    toggle = () => {
        this.setState({ open: !this.state.open })
    }

    render(){
        return(
           <>
                <h1>クラスコンポーネント</h1>
               <button onClick={this.toggle}>
                   {this.state.open ? 'close': 'open'}
               </button>
               <div className={this.state.open ? 'isOpen': 'isClose'}>
                   <p>現在の数字は {this.state.count }</p>
                   {/* ボタンをクリックしたときに、this.setState()を呼ぶことでcountステートを更新 */ }
                   <button 
                        onClick={() => this.setState({ count: this.state.count + 1})}
                    >
                        + 1
                    </button>
                    <button 
                        onClick={() => this.setState({ count: this.state.count - 1})}
                    >
                        - 1
                    </button>
                    <button onClick={() => this.setState({ count: 0})}>0</button>
                    <button onClick={() => this.setState({count: initialState })}>
                        最初の数値に戻す
                    </button>
                    
               </div>
               <Link to="/useState">関数コンポーネントへ！</Link>
           </>
        )
    }
}

export default useState