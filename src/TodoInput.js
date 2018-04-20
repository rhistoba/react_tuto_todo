import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleClick(e) {
    const inputValue = this.state.inputValue;
    this.props.addTodo(inputValue);
  }

  render() {
    return (
      <div className="TodoInput">
        <input placeholder="Input New Todo" value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.handleClick}>register</button>
      </div>
    );
  }
}

export default TodoInput;