import React, { useEffect } from 'react'
import { animateScroll } from 'react-scroll'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet, Route, RouterProvider, Routes, ScrollRestoration, createBrowserRouter, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import ResetStyle from './ResetStyle'
import GlobalStyle from './GlobalStyle'

import App from './pages/App'
import Guideline from './pages/Guideline'
import Contact from './pages/Contact'

import './style.css'

const Root: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    animateScroll.scrollToTop()
  }, [pathname])

  return (
    <>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'guideline',
        element: <Guideline />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
