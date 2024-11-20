import { useContext } from "react";

import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total"></p>
    </Modal>
  );
};

export default Cart;
