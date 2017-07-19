import React from 'react';
import ReactDOM from 'react-dom'
import InputLine from './InputLine'
import ToDoList from './ToDoList'

let dummyData = [{ taskText: "wash the dishes", completed: false }, { taskText: "finish coding homework", completed: false }, { taskText: "read a book", completed: true }, { taskText:"do grocery", completed: false }];

class ToDoApp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todos: [],
    }
  }
  componentDidMount(){
    this.setState({todos: dummyData})
  }
  addTodo(todoString){
    console.log(todoString)
    dummyData.push({taskText: todoString, completed: false});
    this.setState({todos: dummyData})
  }
  render(){
    return(
      <div>
        <InputLine submit={(todoString) => this.addTodo(todoString)}/>
        <ToDoList todos = {this.state.todos}/>
      </div>
    )
  }
}

export default ToDoApp;
