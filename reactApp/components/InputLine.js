import React from 'react';
import ReactDOM from 'react-dom'

class InputLine extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <form>
          <input type="text" placeholder="your todo item..." value=""/>
          <input type="submit" value="Add Todo" onClick = {() => this.props.submit("Test data")}/>
        </form>
      </div>
    );
  }
}

export default InputLine;
