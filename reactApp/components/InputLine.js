import React from 'react';
import ReactDOM from 'react-dom'

class InputLine extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      typedText: "",
    }
  }
  handleTyping(e){
    var typed = e.target.value;
    this.setState({typedText: typed});
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.submit(this.state.typedText);
    this.setState({typedText: ""});
  }
  render(){
    return (
      <div>
        <form>
          <input type="text" placeholder="your todo item..." value={this.state.typedText} onChange = {(e) => {this.handleTyping(e)}}/>
          <input type="submit" value="Add Todo"  onClick = {(e) => {this.handleSubmit(e)}}/>
        </form>
      </div>
    );
  }
}

export default InputLine;
