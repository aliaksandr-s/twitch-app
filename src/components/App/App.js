import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../../reducers/index';
import thunk from 'redux-thunk';

import './App.css';
import Menu from '../Menu/menu'
import Content from '../Content/content'

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="App">
          <Menu/>
          <Content/>
        </div>
      </Provider>
    );
  }
}

export default App;
