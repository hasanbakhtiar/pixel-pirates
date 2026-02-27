import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import configureStore from './tools/store/configureStore';
import { Provider } from 'react-redux';
import Router from './Router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { getProductAction, productAddAction, productDelete, productEdit } from './tools/actions/productAction';
import { categoryAddAction } from './tools/actions/categoryAction';
import supabase from './utils/supabase';

const mystore = configureStore();
mystore.subscribe(() => {
  console.log(mystore.getState());

})


const fetchData = async () => {
  const { data, error } = await supabase.from('product').select();
  if (error) {
    console.log(error);
  } else {
    mystore.dispatch(getProductAction(data))

  }
}

fetchData();




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={mystore}>
      <Router />
    </Provider>
  </StrictMode>,
)
