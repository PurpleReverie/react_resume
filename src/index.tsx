import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
