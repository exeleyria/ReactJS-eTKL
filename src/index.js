import React from 'react';
import ReactDOM from 'react-dom/client';
import {CarritoProvider } from './context/carritoContext';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CarritoProvider>
    <App />
  </CarritoProvider>
);


