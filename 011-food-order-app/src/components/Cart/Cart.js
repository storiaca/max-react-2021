import React from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "Sishi", amount: 2, price: 12.99 }].map(
    (item) => <li key={item.id}>{item.name}</li>
  );
  return (
    <div>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.action}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
