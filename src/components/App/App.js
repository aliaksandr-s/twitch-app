import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/menu'
import Content from '../Content/content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Content/>
      </div>
    );
  }
}

export default App;
