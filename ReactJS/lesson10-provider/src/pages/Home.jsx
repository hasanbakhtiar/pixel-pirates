import { useContext } from "react"
import { ProductContext } from "../context/ProductProvider"
import StaticLang from "../utils/StaticLang";


const Home = () => {
  const [products] = useContext(ProductContext);
  return (
    <>
      <h1><StaticLang az={"Ana sehife"} en={"Home page"}/></h1>
      <ul>
        {products.map(item => (
          <li>{item.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Home