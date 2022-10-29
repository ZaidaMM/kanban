import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeModeProvider } from './provider/ThemeModeProvider';
import './index.scss';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './provider/AppProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeModeProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </ThemeModeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
