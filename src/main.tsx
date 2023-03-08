import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './pages/App'
import ResetStyle from './ResetStyle'
import GlobalStyle from './GlobalStyle'

import './style.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
