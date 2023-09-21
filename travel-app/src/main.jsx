import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'mapbox-gl/dist/mapbox-gl.css';
import ErrorBoundary from './ErrorBoundary.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
