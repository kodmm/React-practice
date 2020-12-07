import React, {Component} from 'react';
import './App.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: ''
    };
  }

  onInput = (e) => {
    this.setState({
      name: e.target.value
    });
    console.log(this.state.name)
  }

  create = () => {
    this.setState({
      todos: this.state.todos.concat(this.state.name),
      name: ''
    })
    console.log(this.state.todos)
  }

  render(){
    const {todos} = this.state.todos;
    {console.log(todos)}
    return (<div>
      <input type="text" onInput={this.onInput} value={this.state.name}/>
      <button onClick = {this.create}>登録</button>
      <ul>
        {this.state.todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </div>);
  }
}


export default Todo;
