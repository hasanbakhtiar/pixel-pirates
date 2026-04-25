import type { Product } from "@/types/product.type";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: Product = await res.json();

    return (
        <div>
            <ul>
                <li><img src={product.image} alt={product.title} /></li>
                <li>{product.title}</li>
                <li>{product.price}</li>
            </ul>
        </div>
    )
}

export default Page