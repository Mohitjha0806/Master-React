import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
function reportWebVitals() {
  throw new Error('Function not implemented.');
}

