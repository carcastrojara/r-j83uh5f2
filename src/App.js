import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }

  handleTextareaChange = (event) => {
    const count = event.target.value.length;
    this.setState({
      count
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <textarea rows="3" onChange={this.handleTextareaChange}></textarea>
        <div className="counter">{count}</div>
      </div>
    );
  }
}

export default App;
