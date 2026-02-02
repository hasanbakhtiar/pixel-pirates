
import { Row } from 'react-bootstrap';
import SingleCard from '../layout/components/SingleCard';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductProvider';
import { LangContext } from '../context/LangProvider';

const Products = () => {
    const [products] = useContext(ProductContext);
    return (
        <>
            <h1 className='text-center my-5'>Products List</h1>
            <Row className='g-5'>
                {products.map(item => (
                    <SingleCard id={item.id} key={item.id} image={item.image} title={item.title} price={item.price} />
                ))}
            </Row>
        </>
    )
}

export default Products