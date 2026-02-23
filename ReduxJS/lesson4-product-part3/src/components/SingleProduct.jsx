
const SingleProduct = ({ items }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card">
                <img height={300} style={{ "objectFit": "contain" }} src={items.image} className="card-img-top" alt={items.title} />
                <div className="card-body">
                    <h5 className="card-title">{items.title}</h5>
                    <p className="card-text">${items.price}</p>
                    <a href="#" className="btn btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct