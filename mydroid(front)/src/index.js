import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './Component/Context';
// import UserContext from './Component/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      {/* <UserContext> */}

      <App />
      {/* </UserContext> */}
    </ContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
