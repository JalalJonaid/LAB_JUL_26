import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import.meta.env.VITE_KEY;

console.log(`${import.meta.env.VITE_KEY}`);
console.log("hello");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
