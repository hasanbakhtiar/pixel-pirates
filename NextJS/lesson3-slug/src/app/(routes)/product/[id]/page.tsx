"use client"

import { productType } from "@/types/productType";
import axios from "axios";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

const page = () => {
    const { id } = useParams<{ id: string }>()
    const [product, setProduct] = useState<productType>();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(res => setProduct(res.data)).catch(err => console.log(err))
    }, [product])

    return (
        <div>
            <ul>
                <li><img src={product?.image} alt="" /></li>
                <li>{product?.title}</li>
                <li>{product?.price}</li>
            </ul>
        </div>
    )
}

export default page