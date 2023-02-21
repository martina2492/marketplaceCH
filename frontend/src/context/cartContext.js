import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((product) => product.id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increase = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      })
    );
  };

  const decrease = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((product) => {
          if (product.id === productId) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        })
        .filter((product) => product.quantity > 0)
    );
  };

  const getCartItemCount = () => {
    return cartItems.reduce((acc, product) => acc + product.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (acc, product) => acc + product.quantity * product.cost,
      0
    );
  };

  const values = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    increase,
    decrease,
    getCartItemCount,
    getCartTotal,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContext;
