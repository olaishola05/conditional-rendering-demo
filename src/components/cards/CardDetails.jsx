import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function CardDetails() {
  const { id } = useParams();
  const productUrl = process.env.REACT_APP_Prod_API_URL;
  const navigate = useNavigate();
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    const product = async () => {
      const data = await fetch(`${productUrl}/${id}`);
      const result = await data.json();
      setProduct(result);
    };
    product();
  }, [id, productUrl]);

  React.useEffect(() => {
    const title = document.getElementsByTagName("h1");
    title[0].style.color = "red";
  }, []);

  return (
    <div className="w-[400px]">
      <h1>
        {product?.title} - {product.category}
      </h1>
      <img src={product.image} alt={product?.name} />
      <p>{product.price}</p>
      <p>{product.description}</p>

      <div className="flex gap-2">
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </div>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
}
