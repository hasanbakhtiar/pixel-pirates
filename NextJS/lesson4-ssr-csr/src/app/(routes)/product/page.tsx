import SingleProduct from "@/components/SingleProduct";
import type { Product } from "@/types/product.type";

const ProductPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
  const products: Product[] = await res.json();

  return (
    <div>
      <h1 className="text-center my-4">Product List</h1>
      <div className="container">
        <div className="row g-3">
          {products.map(item => (
            <SingleProduct key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductPage