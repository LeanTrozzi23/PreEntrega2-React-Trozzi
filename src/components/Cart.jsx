import { useState } from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return <h2 className="h2-cart">No hay productos en el carrito.</h2>;
  }

  const totalAmount = cartItems.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  );

  const [mostrarTexto, setMostrarTexto] = useState(false);

  const manejarClick = () => {
    setMostrarTexto(true);

    setTimeout(() => {
      clearCart();
      setMostrarTexto(false);
    }, 2000);
  };

  return (
    <div className="cart-container">
      <h2 className="h2-cart">Carrito de compras</h2>
      <ul className="ul-cart">
        {cartItems.map((item) => (
          <li className="li-cart" key={item.id}>
            <h3>{item.title}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div>
        <h2 className="h2-cart">Total: ${totalAmount}</h2>
        <button className="btn-clear" onClick={clearCart}>
          Limpiar carrito
        </button>
      </div>
      <div>
        <button className="btn-pago" onClick={manejarClick}>
          Proceder al pago
        </button>
        {mostrarTexto && <h2 className="h2-compra">COMPRA REALIZADA!!✅</h2>}
      </div>
    </div>
  );
};

export default Cart;
