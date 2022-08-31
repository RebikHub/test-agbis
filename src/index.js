import React from 'react';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store } from './store/store';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)
