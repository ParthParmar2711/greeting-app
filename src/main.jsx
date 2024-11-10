import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import React from 'react';
import './index.css'
import App from './App.jsx'
import "./i18n.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <React.Suspense fallback='loading...'>
      <App />
    </React.Suspense>
  </StrictMode>,
)
