import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Helmet from 'react-helmet';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Riandika Lumaris</title>
      <meta name="description" content="An experienced web and mobile app developer. Highly skilled in PHP, JavaScript, Node.js, React.js, .NET Core, Universal Windows Platform, and more." />
      <meta name="robots" content="index,follow" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
