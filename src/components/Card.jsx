import React from "react";
import Button from "./Button";

export default function Card(props) {
  const {
    product: { name, price, id },
  } = props;
  return (
    <div className="card">
      <a href={`/${id}`}>
        <h1>{name}</h1>
        <img src={props.product.imageUrl || props.product.image} alt={name} />
        <p>{price}</p>
        <div>
          <Button>Add to Cart</Button>
          <Button>Buy Now</Button>
        </div>
      </a>
    </div>
  );
}
