import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";
import "../style/card.css";

const ItemDetail = ({ product }) => {
  const [itemCountVisibility, setItemCountVisibility] = useState(true);
  const { addToCart } = useCart();

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  const handleCart = (quantity) => {
    addToCart(product, quantity);
    setItemCountVisibility(false);
  };

  return (
    <div className="card-container">
      <h1 className="product-title">{product.title}</h1>
      <img src={product.image} alt={product.title} className="product-image" />

      <span className="product-description">
        {typeof product.description === "string"
          ? product.description
          : "Descripción no disponible"}
      </span>

      <h3 className="product-price">${product.price}</h3>

      <div className="item-count-container">
        {itemCountVisibility ? (
          <ItemCount addCart={handleCart} product={product} />
        ) : (
          <button
            className="go-to-cart-btn"
            onClick={() => (window.location.href = "/cart")}
          >
            Ir al carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
