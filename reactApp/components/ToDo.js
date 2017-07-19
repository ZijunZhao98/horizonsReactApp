import React from 'react';
import ReactDOM from 'react-dom'

class ToDo extends React.Component{
  constructor(props){
    super(props)
  }
  handleClick(e){
    e.preventDefault();
    this.props.xClick();
  }
  handleToggle(e){
    e.preventDefault();
    this.props.toggle();
  }
  render(){
    return(
      this.props.complete?
      <li onClick={(e) => {this.handleToggle(e)}}><button onClick = {(e) => {this.handleClick(e)}}>X</button>  <strike>{this.props.task}</strike></li> :
      <li onClick={(e) => {this.handleToggle(e)}}><button onClick = {(e) => {this.handleClick(e)}}>X</button>  {this.props.task}</li>
    );
  }
}

export default ToDo;
