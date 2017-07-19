import React from 'react';
import ReactDOM from 'react-dom'

let dummyData = [{ taskText: "wash the dishes", completed: false }, { taskText: "finish coding homework", completed: false }, { taskText: "read a book", completed: true }, { taskText:"do grocery", completed: false }];

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
      this.props.complete? <li><button>X</button> <strike>{this.props.task}</strike></li> : <li><button>X</button>{this.props.task}</li>
    );
  }
}

class ToDoList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let toDos = dummyData.map((each) => (<ToDo task={each.taskText} complete = {each.completed}/>));
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
