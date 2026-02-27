import ProductForm from './ProductForm'
import { useDispatch, useSelector } from 'react-redux';
import { productAddAction, productEdit } from '../../../tools/actions/productAction';
import { useParams } from 'react-router-dom';

const ProductEdit = () => {
    const { id } = useParams();
    const product = useSelector(p => p.product);
    const dispatch = useDispatch();

    const findProduct = product.find(p => p.id == id);

    return (
        <>
        {findProduct?<div className="d-flex align-items-center justify-content-center flex-column">
            <h1 className='my-5'>Edit Product</h1>
            <ProductForm editdata={findProduct} formData={(fd) => { dispatch(productEdit(findProduct.id, fd)) }} />
        </div>:<p>Loading...</p>}
        </>
    )
}

export default ProductEdit