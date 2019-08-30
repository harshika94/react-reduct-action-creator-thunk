import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { createStore , applyMiddleware } from 'redux';
import reducer from './Reducer/reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducer,applyMiddleware(thunk));

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
}

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
