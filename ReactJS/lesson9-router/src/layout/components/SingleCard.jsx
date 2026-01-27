import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleCard = ({ image, title, price, id }) => {
    return (
        <Col sm={12} md={4} >
            <Card>
                <Card.Img variant="top" style={{ height: "150px", objectFit: "contain" }} src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {price}AZN
                    </Card.Text>
                    <Link className="btn btn-primary" to={`/products/${id}`}>Read more</Link>
                </Card.Body>
            </Card>

        </Col>
    )
}

export default SingleCard