import React from "react";
import "../style/card.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const handleDetalles = (id) => {};
  return (
    <div className="card-container">
      <img src={item.image} className="ropa" />
      <h2>{item.title}</h2>
      <div className="item-detalles">
        <h3>Precio: ${item.price}</h3>
        <Link to={`/detail/${item.id}`}>
          <button onClick={() => handleDetalles(item.id)}>Detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
