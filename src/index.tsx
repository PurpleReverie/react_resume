import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { PersonSEO } from './components/PersonalSEO';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <PersonSEO />
      <App />
    </HashRouter>
  </React.StrictMode>
);
