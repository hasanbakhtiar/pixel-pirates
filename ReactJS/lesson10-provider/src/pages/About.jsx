import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductProvider';
import StaticLang from '../utils/StaticLang';

const About = () => {
  const [products, setProducts] = useContext(ProductContext);
  return (
    <>
    <h1><StaticLang az={"Haqqimizda"} en={"About us"}/></h1>
    <ol>{products.map(item=>(
      <li>{item.price}</li>
    ))}</ol>
    <button onClick={()=>{setProducts([
      {
        title:"Hello",
        price:13321
      }
    ])}}>send</button>
    </>
  )
}

export default About