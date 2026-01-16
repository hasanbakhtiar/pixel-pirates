import { Component } from 'react'

class SingleProduct extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    title: "Asus Zenbook",
                    price: 3000,
                    stock: 5
                }
            ],
            count: 1,
            stock: 1
        }
    }


    render() {
        return (
            <div>
                {this.state.data[0].stock === this.state.stock ? <p className="alert alert-danger">Stock of out</p> : ""}
                <p>{this.state.data[0].title}</p>
                <p>{this.state.data[0].price * this.state.count}</p>
                <button className='btn btn-success' onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        stock: this.state.stock + 1
                    },)
                }}>add to card</button>
            </div>
        )
    }
}

export default SingleProduct