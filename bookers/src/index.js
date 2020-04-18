import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './index.css'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      
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
  )
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
);