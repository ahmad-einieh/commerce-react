import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import Product from "./Product";

export default function ProductDetails() {
    const api_url = "https://fakestoreapi.com/products";
    const params = useParams();
    const [product,setProduct] = useState({});
    useEffect(()=>{
        fetch(`${api_url}/${params.productid}`)
        .then((res)=>res.json())
        .then((data)=>{
            setProduct(data);
        });
    },[]);
    return (<>
    <Product product={product} showButton={false}/> 
    </>);
}