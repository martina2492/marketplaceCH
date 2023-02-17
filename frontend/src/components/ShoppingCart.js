import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Product from "./Product";

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);
  const total = cart ? cart.reduce((acc, item) => acc + item.price, 0) : 0;

  return (
    <div>
      <Navbar />
      <h2>Shopping Cart</h2>
      <p>Total: {total}</p>
      {cart && cart.map((item) => <Product key={item.id} product={item} />)}
      <Footer />
    </div>
  );
};

export default ShoppingCart;
