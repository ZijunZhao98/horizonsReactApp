import React from 'react';
import ReactDOM from 'react-dom'

let dummyData = ["wash the dishes", "finish coding homework", "read a book", "do grocery"];

class InputLine extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <form>
          <input type="text" placeholder="your todo item..." value=""/>
          <input type="submit" value="Add Todo"/>
        </form>
      </div>
    );
  }
}

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

class ToDoApp extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <InputLine />
        <ToDoList />
      </div>
    )
  }
}

ReactDOM.render(<ToDoApp />,
   document.getElementById('root'));
