import ReactDOM from 'react-dom';
import React from 'react';
// import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './state/store';
import { App } from './app';


import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
   <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
