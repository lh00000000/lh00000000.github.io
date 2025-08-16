import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style.css'

const appElement = document.getElementById('app')

if (!appElement) {
  throw new Error('Root element not found. Make sure there is a <div id="root"></div> in your HTML.')
}

ReactDOM.createRoot(appElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 