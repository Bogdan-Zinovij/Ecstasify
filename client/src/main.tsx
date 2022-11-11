import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ThemeConfig from './theme';
import 'typeface-jost';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeConfig>
        <App />
      </ThemeConfig>
    </BrowserRouter>
  </React.StrictMode>
);
