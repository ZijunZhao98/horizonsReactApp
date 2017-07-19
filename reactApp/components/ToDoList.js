import React from 'react';
import ReactDOM from 'react-dom'
import ToDo from './ToDo'

class ToDoList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let toDos = this.props.todos.map((each) => (<ToDo task={each.taskText} complete = {each.completed}/>));
    return(
      <ul>{toDos}</ul>
    );
  }
}

export default ToDoList;
