import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Slider from './Slider';    // TODO: Remember to import new components ya dingus!
import reportWebVitals from './reportWebVitals';

// index.js is the first executed in the browser.
ReactDOM.render(
  <React.StrictMode>
    <Slider/>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Render App component in div w/ id = root in index.html When run into browser, React renders content returned by custom components.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
