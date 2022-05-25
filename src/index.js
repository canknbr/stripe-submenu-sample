import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SubmenuProvider from './context';
ReactDOM.render(
  <React.StrictMode>
    <SubmenuProvider>
      <App />
    </SubmenuProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
