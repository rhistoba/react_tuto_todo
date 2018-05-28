import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          title: 'defalut Todo',
          id: 0,
        },
      ],
      uniqueId: 1,
    };
    this.addTodo = this.addTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }

  addTodo(title) {
    const { tasks, uniqueId } = this.state;
    // tasks.push({ title, id: uniqueId });
    // this.setState({ tasks, uniqueId: uniqueId+1 });

    // pushはstateを直接変更してしまうので、concatを使う。
    const newTasks = tasks.concat({ title, id: uniqueId });
    this.setState({ tasks: newTasks, uniqueId: uniqueId+1  });
  }

  resetTodo() {
    this.setState({
      tasks: [],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>TODO App</h1>
        <button onClick={this.resetTodo}>reset</button>
        <TodoInput addTodo={this.addTodo}/>
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
