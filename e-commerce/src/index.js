import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store'
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import Context from './store/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>
  </Context>
);

