import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyFunTas1 from './FunctionalComponent/MyFunTas1';
import MyFunTas2 from './FunctionalComponent/MyFunTas2';
import MyFunTas3 from './FunctionalComponent/MyFunTas3';
import MyFunTas4 from './FunctionalComponent/MyFunTas4';
import MyFunTas5 from './FunctionalComponent/MyFunTas5';

import MyFunTas6 from './FunctionalComponent/MyFunTas6';
import MyFunTas7 from './FunctionalComponent/MyFunTas7';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
