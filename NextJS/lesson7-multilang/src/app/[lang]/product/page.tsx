import SingleProduct from "@/components/SingleProduct";
import type { Product } from "@/types/product.type";
import { getDictionary } from '../dictionaries';

async function ProductPage({ params }: { params: Promise<{ lang: 'en' | 'az' }> }) {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products: Product[] = await res.json();
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <h1 className="text-center my-4">{dict.products.productlist}</h1>
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