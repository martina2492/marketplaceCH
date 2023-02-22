import { createContext, useReducer } from "react";
import cartReducer from "./CartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const addToCart = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: { id: productId } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const increase = (productId) => {
    dispatch({ type: "INCREASE", payload: { id: productId } });
  };

  const decrease = (productId) => {
    dispatch({ type: "DECREASE", payload: { id: productId } });
  };

  const getCartItemCount = () => {
    return state.cartItems.reduce((acc, product) => acc + product.quantity, 0);
  };

  const getCartTotal = () => {
    return state.cartItems.reduce(
      (acc, product) => acc + product.quantity * product.cost,
      0
    );
  };

  const values = {
    cartItems: state.cartItems,
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
