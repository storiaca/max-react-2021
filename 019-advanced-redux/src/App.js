import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const FIREBASE_DOMAIN = process.env.REACT_APP_FIREBASE;
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(`${FIREBASE_DOMAIN}cart.json`, {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart, FIREBASE_DOMAIN]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
