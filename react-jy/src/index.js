import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './Chapter_03/Library';
import Clock from './Chapter_04/Clock';
import CommentList from './Chapter_05/CommentList';
import NotificationList from './Chapter_06/NotificationList';
import Accommodate from './Chapter_07/Accommodate';

const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//    );  
// }, 1000);

root.render(
  <React.StrictMode>
    <Accommodate></Accommodate>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
