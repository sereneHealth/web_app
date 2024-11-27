import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AOS from 'aos';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Route from './route/index';

AOS.init({
  duration: 1000, 
  offset: 200,   
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
