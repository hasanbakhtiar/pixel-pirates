import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data));
    }, [])

    return (
        <>
            {product.length === 0 ? <PacmanLoader /> : <div className="container col-xxl-8 px-4 py-5"> <div className="row flex-lg-row-reverse align-items-center g-5 py-5"> <div className="col-10 col-sm-8 col-lg-6"> <img src={product.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" /> </div> <div className="col-lg-6"> <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{product.title}</h1> <h3>{product.price}AZN</h3><p className="lead">{product.description}</p> <div className="d-grid gap-2 d-md-flex justify-content-md-start"><Link to="/products" className="btn btn-outline-secondary btn-lg px-4">Back</Link> </div> </div> </div> </div>}
        </>

    )
}

export default ProductDetails