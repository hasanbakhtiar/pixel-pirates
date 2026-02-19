import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { productDelete } from '../../../tools/actions/productAction';

const ProductList = () => {
  const product = useSelector(p => p.product);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className='my-5'>Product List</h1>
        <Link className='btn btn-dark' to="/dashboard/product/add">Add</Link>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, count) => (
              <tr>
                <th scope="row" key={count}>{count + 1}</th>
                <td><img src={item.image} style={{ "objectFit": "contain" }} width={70} alt={item.title} /></td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td><Link className="btn btn-warning">Edit</Link></td>
                <td><button className='btn btn-danger' onClick={() => { dispatch(productDelete(item.id)) }}>X</button></td>
              </tr>

            ))}

          </tbody>
        </table>

      </div>

    </div>
  )
}

export default ProductList