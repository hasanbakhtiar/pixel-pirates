import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductForm = ({ formData, editdata }) => {

    const [image, setImage] = useState(editdata ? editdata.image : "");
    const [title, setTitle] = useState(editdata ? editdata.title : "");
    const [price, setPrice] = useState(editdata ? editdata.price : "");

    const navigate = useNavigate();
    const addProduct = (e) => {
        e.preventDefault();
        formData({
            image, title, price
        })
        navigate('/dashboard/product')
    }

    return (
        <>


            <div className="col-6">
                <form onSubmit={addProduct}>
                    <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input value={image} onChange={e => setImage(e.target.value)} required type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input value={title} onChange={e => setTitle(e.target.value)} required type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input value={price} onChange={e => setPrice(e.target.value)} required type="text" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-dark">{editdata?"Edit":"Add"}</button>
                </form>
            </div>


        </>
    )
}

export default ProductForm