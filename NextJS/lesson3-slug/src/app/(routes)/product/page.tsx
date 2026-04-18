"use client"

import SingleProduct from "@/components/SingleProduct";
import { productType } from "@/types/productType"
import axios from "axios";
import { useEffect, useState } from "react"



const Product = () => {
  const [product, setProduct] = useState<productType[]>([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => setProduct(res.data)).catch(err => console.log(err))
  }, [product])

  return (
    <div>
      <h1 className="text-center my-4">Product List</h1>
      <div className="container">
        <div className="row g-3">
          {product.map(item => (
            <SingleProduct key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product