import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: 1,
    title: "Apple",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    title: "Piapple",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    title: "Orange",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const Product = () => {
  return (
    <div className="card">
      {PRODUCTS.map((PRODUCT) => (
        <Link to={`/product/${PRODUCT.title}`}>
          <div className="product" key={PRODUCT.id}>
            <p className="title">{PRODUCT.title}</p>
            <p>{PRODUCT.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Product;
