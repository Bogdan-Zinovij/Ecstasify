import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ThemeConfig from './theme';
import 'typeface-jost';
import RootStoreProvider from './stores';
import { store } from './stores/root.store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RootStoreProvider store={store}>
        <ThemeConfig>
          <App />
        </ThemeConfig>
      </RootStoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
