import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import ScrollToTop from './ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)