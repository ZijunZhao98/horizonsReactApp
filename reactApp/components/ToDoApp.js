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
    dummyData.push({taskText: todoString, completed: false});
    this.setState({todos: dummyData});
  }
  removeTodo(index){
    dummyData.splice(index, 1);
    this.setState({todos: dummyData});
  }
  toggleComplete(index){
    let todoItem = dummyData[index];
    todoItem.completed = !todoItem.completed;
    let newArray = dummyData.map((item, i) => {
      if(i === index){
        item = todoItem;
      }
      return item;
    })
    this.setState({todos: newArray});
  }
  render(){
    return(
      <div>
        <InputLine submit={(todoString) => this.addTodo(todoString)}/>
        <ToDoList todos = {this.state.todos} toggleCross = {(index) => {this.toggleComplete(index)}} todoXClick = {(index) => {this.removeTodo(index)}}/>
      </div>
    )
  }
}

export default ToDoApp;
