import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/bootstrap.min.css';
import './assets/style.css';
import Router from './Router'
import { ProductProvider } from './context/ProductProvider';
import { CartProvider } from 'react-use-cart';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <ProductProvider>
        <Router />
      </ProductProvider>
    </CartProvider>
  </StrictMode>,
)
