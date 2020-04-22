import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Item from "./Item.js"
import './index.css'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/books" component={Index} />
      
    </div>
  </BrowserRouter>
)

const Home = () => {
  return(
    <div className="container text-center col-md-5 col-md-offset-2">
      <div className="row">
        <h1>ようこそBookersへ</h1>
        <p>Bookersでは、さまざまな書籍に関するあなたの意見や<br />
          印象を共有し交換することができます
        </p>
      </div>
      <div className="row">
        <div className="col-md-7">
          <p>
            <Link to="/books">Start</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Books: JSON.parse(localStorage.getItem("Books")) || [],
      id: JSON.parse(localStorage.getItem("id")) || 1,
    };


  }

  addItem = (item, callBack) => {
    this.setState({
      Books: this.state.Books.concat(item),
      id: this.state.id + 1
    },
    () => {
      //localStrageにtodoList stateを保存
      localStorage.setItem("Books", JSON.stringify(this.state.Books))
      
      //callBack関数が引数に渡されていた場合に実行
      callBack && callBack()
    }
    )
  }

  removeItem = (item, callBack) => {
    this.setState(
      {
        Books: this.state.Books.filter(x => x !== item)
      },
      () => {
        //localStorageにBooks stgateを保存
        localStorage.setItem("Books", JSON.stringify(this.state.Books))
        //callBack関数が引数に渡されていた場合に実行
        callBack && callBack()
       

      }
    )
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-2">
            <section className="Books-index">
              <h1>Books</h1>
              <table className="table" border="1">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* Books配列の要素数分のItemsコンポーネントを展開 */}
                  {this.state.Books.map(Book => (
                    <Item 
                        key={Book.id.toString()}
                        id={Book.id}
                        title={Book.title}
                        description={Book.description}
                        //クリックれたItemをBooksから削除
                        onClick={() => this.removeItem(Book)}
                      
                    />
                  
                  )
                  )}
                </tbody>
              </table>
            </section>
          </div>
        </div>
        
        <div className="row col-md-5 col-md-offset-2">
          <section className="Book-Post">
            <form className="Book-form"
              onSubmit={e => {
                //formのデフォルトイベントをキャンセル
                e.preventDefault();

                //idがtitleのElementを取得
                const titleElement = e.target.elements["title"]
                //idがdescriptionのElementを取得
                const descriptionElement = e.target.elements["description"];

                //Books stateに追加
               this.addItem({
                 id: this.state.id,
                 title: titleElement.value,
                 description: descriptionElement.value
               },
               () => {
                 //stateの変更後に入力した値を空にする
                 titleElement.value = "";
                 descriptionElement.value = "";
               }
               )
              }}
            >
              <div>
                <input 
                  id="title" 
                  placeholder="title"
                />
                <textarea 
                  id="description" 
                  placeholder="description"
                />
              </div>
              <div>
                <button
                  type="submit"
                >
                  投稿
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    )
  }
}






ReactDOM.render(
  <App />,
  document.getElementById('root')
);