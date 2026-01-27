import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/bootstrap.min.css';
import './assets/style.css';
import Router from './Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
