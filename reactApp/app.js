import React from 'react';
import ReactDOM from 'react-dom'

let dummyData = ["wash the dishes", "finish coding homework", "read a book", "do grocery"];

class ToDo extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <li><button>X</button> {this.props.task}</li>
    );
  }
}

class ToDoList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let toDos = dummyData.map((each) => (<ToDo task={each}/>));
    console.log(toDos);
    return(
      <ul>{toDos}</ul>
    );
  }
}

ReactDOM.render(<ToDoList />,
   document.getElementById('root'));
