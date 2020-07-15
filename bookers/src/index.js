import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Books from './Books.js'
import OneBook from './OneBook.js'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer.js'


const store = createStore(reducer);

const App = () => (
  <Provider store={store} >
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
        <Route path="/books/:id" component={OneBook} />
      </div>
    </BrowserRouter>
  </Provider>
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




ReactDOM.render(
  <App />,
  document.getElementById('root')
);