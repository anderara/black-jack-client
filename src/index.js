import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import * as serviceWorker from './serviceWorker'

import { createBrowserHistory } from 'history'
export const browserHistory = createBrowserHistory()

ReactDOM.render(<Provider store={store}>
   <Router history={browserHistory}>
       <App />
   </Router>
</Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();