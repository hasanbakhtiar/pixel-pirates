import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import configureStore from './tools/store/configureStore';
import { Provider } from 'react-redux';
import Router from './Router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { productAddAction, productDelete } from './tools/actions/productAction';
import { product, category } from './data/static';
import { categoryAddAction } from './tools/actions/categoryAction';

const mystore = configureStore();
mystore.subscribe(() => {
  console.log(mystore.getState());

})
product.map(item => (
  mystore.dispatch(productAddAction(item))
))


category.map(item => (
  mystore.dispatch(categoryAddAction(item))
))




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={mystore}>
      <Router />
    </Provider>
  </StrictMode>,
)
