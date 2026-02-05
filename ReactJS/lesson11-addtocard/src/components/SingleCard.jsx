import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { useCart } from 'react-use-cart';

const SingleCard = ({ alldata, image, title, price, id }) => {
    const { addItem } = useCart();
    const notify = () => toast.success('🦄 Wow so easy!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });;
    return (
        <Col sm={12} md={4} >
            <Card>
                <Card.Img variant="top" style={{ height: "150px", objectFit: "contain" }} src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {price}$
                    </Card.Text>
                    <Button variant='warning me-3' onClick={() => { addItem(alldata), notify() }}>Add to card</Button>
                    <Link className="btn btn-primary" to={`/products/${id}`}>Read more</Link>
                    <ToastContainer />
                </Card.Body>
            </Card>

        </Col>
    )
}

export default SingleCard