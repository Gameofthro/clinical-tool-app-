import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root');

if (!rootElement) {
  // Defensive check: If the element is missing, we log it instead of crashing the app
  console.error("Critical Error: The DOM element with id 'root' was not found. Check your index.html file.");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}