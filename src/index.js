import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import myReducer from './reducer/index.js'
const store=createStore(myReducer)

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>  
    , document.getElementById('root'));

serviceWorker.unregister();
