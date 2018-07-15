import React, { Component } from 'react';
import Todo from './components/Todo';
import Ui from './components/Ui';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TO DO</h1>
        <Ui />
        <hr />
        <Todo />
      </div>
    );
  }
}

export default App;
