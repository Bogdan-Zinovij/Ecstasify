import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ThemeConfig from './theme';
import 'typeface-jost';
import RootStoreProvider from './stores';
import { store } from './stores/root.store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <RootStoreProvider store={store}>
      <ThemeConfig>
        <App />
        <ToastContainer position="top-right" />
      </ThemeConfig>
    </RootStoreProvider>
  </BrowserRouter>
);
