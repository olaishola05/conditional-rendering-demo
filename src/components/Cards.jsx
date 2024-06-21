import React, { useState, useEffect } from "react";
import Card from "./Card";
import { products as productsItems } from "../utils";

export default function Cards() {
  const [products, setProducts] = useState([] || productsItems);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const products = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    products();
  }, []);
  return (
    <div>
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
