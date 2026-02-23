import ProductForm from './ProductForm'
import { useDispatch } from 'react-redux';
import { productAddAction } from '../../../tools/actions/productAction';

const ProductAdd = () => {

  const dispatch = useDispatch();
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className='my-5'>Add Product</h1>
      <ProductForm formData={(fd) => { dispatch(productAddAction(fd)) }} />
    </div>
  )
}

export default ProductAdd