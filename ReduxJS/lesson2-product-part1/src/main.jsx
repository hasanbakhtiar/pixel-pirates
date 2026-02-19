import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import configureStore from './tools/store/configureStore';
import { Provider } from 'react-redux';
import Router from './Router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import manager from './manager';
const mystore = configureStore();
manager();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={mystore}>
      <Router />
    </Provider>
  </StrictMode>,
)
