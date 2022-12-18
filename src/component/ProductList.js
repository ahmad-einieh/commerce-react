import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const api_url = "https://fakestoreapi.com/products";

  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <h1 className="text-center p-3">Our Products</h1>
      <div className="container">
        <div className="row">
            {Products.map((product) => {return (
                
                <div className="col-3" key={product.id}>
                    <div className="pb-3">
                <Product product={product} showButton={true}/>
              </div>
              </div>
            );})}
        </div>
      </div>
    </>
  );
}
