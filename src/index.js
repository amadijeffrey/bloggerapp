import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducers from './reducers'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.js'



export const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)

ReactDOM.render(
  < Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
