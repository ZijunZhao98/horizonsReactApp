import React from 'react';
import ReactDOM from 'react-dom'

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

export default ToDo;
