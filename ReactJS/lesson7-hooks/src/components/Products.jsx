import { useEffect, useState } from "react"
import SingleProduct from "./SingleProduct";


const category = ["men's clothing",
"jewelery"];


const Products = () => {


  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])


console.log(filteredData);





  return (
    <div className="container">
      <h1 className="text-center m-5">Product list</h1>
      {category.map(item=>(
        <p onClick={()=>setFilteredData(item)}>{item}</p>
      ))}
      <div className="row g-5">
        {products.map((item) => (
          <SingleProduct 
          key={item.id} 
          price={item.price} 
          title={item.title}
          image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default Products