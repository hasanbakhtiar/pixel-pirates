import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { productAddAction } from '../../../tools/actions/productAction';

const ProductAdd = () => {

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addProduct = (e) => {
    e.preventDefault();
    dispatch(productAddAction({
      image, title, price
    }))
    navigate('/dashboard/product')
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className='my-5'>Add Product</h1>

        <div className="col-6">
          <form onSubmit={addProduct}>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input onChange={e => setImage(e.target.value)} required type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input onChange={e => setTitle(e.target.value)} required type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input onChange={e => setPrice(e.target.value)} required type="text" className="form-control" />
            </div>
            <button type="submit" className="btn btn-dark">Add</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProductAdd