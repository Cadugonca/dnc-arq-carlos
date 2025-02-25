import './main.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './contexts/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AppProvider>
         <App />
    </AppProvider>
  </React.StrictMode>,
)
