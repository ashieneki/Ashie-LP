import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import ResetStyle from './ResetStyle'
import GlobalStyle from './GlobalStyle'

import App from './pages/App'
import Guideline from './pages/Guideline'
import Contact from './pages/Contact'

import './style.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/guideline" element={<Guideline />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
