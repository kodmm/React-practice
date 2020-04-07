import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import { createStore } from 'redux';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog/:id" component={Blog} />
    </div>
  </BrowserRouter>

)

const vote = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
      default:
        return state

  }
}

let store = createStore(vote)
const Home = () => {
  store.dispatch({type: 'ADD'})
  let x = store.getState().toString()
  
  return(
    <div class="container text-center mt-5">
      <h1>Welcome</h1>
      <p>投票数： {x}</p>
      <p><Link to="/about">Aboutへ</Link></p>
    </div>
  )
}

const About = () => {
  let x = store.getState().toString();
  return (
    <div class="container text-center mt-5">
      <h2>総投票数</h2>
      <p>{x}</p>
    </div>
  )
}

const Blog = props => {
  const { id } = props.math.params 
}

export default App

