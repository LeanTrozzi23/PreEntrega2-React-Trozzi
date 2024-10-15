import React from "react";
import "../style/card.css";
import "../assets/data.json";

const ItemDetail = ({ product }) => {
  return (
    <div className="card-container">
      <img src={product.image} className="ropa" />
      <h1>{product.title}</h1>
      <span>{product.description}</span>
      <h3>${product.price}</h3>
    </div>
  );
};

export default ItemDetail;
