import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart1.svg";
import "../style/card.css";

const CartWidget = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-widget">
      <Link to="/cart" aria-label="Ir al carrito">
        <div className="div-cart">
          <img
            src={cartIcon}
            className="cart-img"
            alt="Ícono del carrito de compras"
          />
          {totalItems > 0 && <span className="">{totalItems}</span>}
        </div>
      </Link>
    </div>
  );
};

export default CartWidget;
