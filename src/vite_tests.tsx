import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import App from './App';
import { ConfigProvider } from './components';

console.log("main.tsx works");

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ConfigProvider>
      <App/>
    </ConfigProvider>
  </React.StrictMode>
);
