import React, { createContext, useReducer } from "react";
import CartReducer, { increase, decrease, clearCart } from "./CartReducer";

const initialState = {
  cartItems: [],
  itemCount: 0,
  total: 0,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addItem = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        itemCount: state.itemCount,
        total: state.total,
        addItem,
        increase: (product) => increase(dispatch, product),
        decrease: (product) => decrease(dispatch, product),
        clearCart: () => clearCart(dispatch),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
