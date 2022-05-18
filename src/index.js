import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './css/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
  </StrictMode>
);
