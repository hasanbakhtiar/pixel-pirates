import { Component } from 'react'

class Card extends Component {
    render() {
        const { title, price, image,stock } = this.props;
        return (
            <div className='col-12 col-sm-6 col-md-4'>
                <div className="card">
                    <img src={image} className="card-img-top" style={{ height: "200px", objectFit: "contain" }} />
                    <div className="card-body">
                        <h5 className="card-title text-danger">{title}</h5>
                        <p className="card-text">{price} AZN</p>
                        <a href="#" className={`${stock===0?"btn btn-danger":"btn btn-success"}`}>{stock===0?"Out of stock":"In stock"}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card