import { useContext } from "react"
import { ProductContext } from "../context/ProductProvider"
import MultipleItemsCarousel from "../components/MultipleItemsCarousel";


const Home = () => {
  const [products] = useContext(ProductContext);
  return (
    <>
      <h1 className="text-center my-5">Best Seller</h1>
      <MultipleItemsCarousel items={products} />
    </>
  )
}

export default Home