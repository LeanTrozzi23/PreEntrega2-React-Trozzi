import React from "react";
import Item from "./Item";
import "../global/style.css";

const ItemList = ({ products }) => {
  return (
    <main>
      <div className="card">
        {products.length > 0 ? (
          products.map((product) => <Item item={product} key={product.id} />)
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </main>
  );
};
export default ItemList;
