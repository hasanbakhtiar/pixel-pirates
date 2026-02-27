import React from 'react'
import { useSelector } from 'react-redux'
import SingleProduct from '../../../components/SingleProduct';

const Product = () => {
  const product = useSelector(p => p.product);
  const category = useSelector(p => p.category);
  console.log(product);

  return (
    <>
      <h1 className='text-center my-5'>Products</h1>
      <div className="row">
        <div className="col-3">
          <ul className="list-group">
            {category.map(item => (
              <li className="list-group-item" key={item.id}>{item.title}</li>

            ))}

          </ul>

        </div>
        <div className="col-9">
          <div className="row g-2">
            {product.map(item => (
              <SingleProduct items={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Product