import React from 'react'
import { Button } from 'react-bootstrap'
import { useCart } from 'react-use-cart'


const Basket = () => {
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    return (
        <>
            {isEmpty ? <div className='d-flex align-items-center justify-content-center'>
                <img src="https://i.pinimg.com/originals/df/1f/72/df1f72a8b434e4a4b3a42d5b4f2adf2f.gif" alt="empty cart" />
            </div> : <div>
                <h2 className='text-center my-5'>My basket</h2>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, count) => (
                                <tr>
                                    <th scope="row">{count + 1}</th>
                                    <td><img src={item.image} height={70} width={70} alt="" /></td>
                                    <td>{item.title}</td>
                                    <td>{Math.round(item.price * item.quantity)}$</td>
                                    <td>
                                        <Button variant={`warning ${item.quantity>1?"":"disabled"}`}  onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}>-</Button>
                                        <span className='mx-2'>{item.quantity}</span>
                                        <Button variant='warning' onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}>+</Button>
                                    </td>
                                    <td><Button variant='danger' onClick={() => { removeItem(item.id) }}>X</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Button onClick={() => { emptyCart() }} variant='danger my-2'>Clear all items</Button>
                    <h3>Total Price:{Math.round(cartTotal)}$</h3>
                </div>
            </div>}


        </>
    )
}

export default Basket