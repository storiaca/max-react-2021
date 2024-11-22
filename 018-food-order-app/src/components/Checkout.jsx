import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  return (
    <Modal>
      <form>
        <h2>Checkout</h2>
        <p>Todal Amount:</p>
      </form>
    </Modal>
  );
};

export default Checkout;
