import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import SingleCard from '../layout/components/SingleCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data));
    }, [])
    return (
        <>
            <h1 className='text-center my-5'>Products List</h1>
            <Row className='g-5'>
                {products.map(item => (
                    <SingleCard id={item.id} key={item.id} image={item.image} title={item.title} price={item.price}/>
                ))}
            </Row>
        </>
    )
}

export default Products