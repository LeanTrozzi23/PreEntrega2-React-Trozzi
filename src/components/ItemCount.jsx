import React, { useState } from "react";

const ItemCount = ({ addCart, product }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-count">
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
      <button onClick={() => addCart(quantity)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
