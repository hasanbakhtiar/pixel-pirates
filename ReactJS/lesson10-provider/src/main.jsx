import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/bootstrap.min.css';
import './assets/style.css';
import Router from './Router'
import { ProductProvider } from './context/ProductProvider';
import { LangProvider } from './context/LangProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <ProductProvider>
        <Router />
      </ProductProvider>
    </LangProvider>
  </StrictMode>,
)
