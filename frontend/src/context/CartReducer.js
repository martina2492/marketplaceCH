const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      // Check if the product already exists in the cart
      const existingProductIndex = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );

      // If the product already exists in the cart, increment its quantity
      if (existingProductIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingProductIndex].quantity += 1;
        return {
          ...state,
          cartItems: updatedCartItems,
          itemCount: state.itemCount + 1,
          total: state.total + action.payload.cost,
        };
      }

      // If the product does not exist in the cart, add it
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        itemCount: state.itemCount + 1,
        total: state.total + action.payload.cost,
      };

    case "INCREASE_QUANTITY":
      const increasedCartItems = [...state.cartItems];
      const increasedItem = increasedCartItems.find(
        (item) => item.id === action.payload.id
      );
      increasedItem.quantity += 1;
      return {
        ...state,
        cartItems: increasedCartItems,
        itemCount: state.itemCount + 1,
        total: state.total + increasedItem.cost,
      };

    case "DECREASE_QUANTITY":
      const decreasedCartItems = [...state.cartItems];
      const decreasedItem = decreasedCartItems.find(
        (item) => item.id === action.payload.id
      );
      decreasedItem.quantity -= 1;

      // If the quantity becomes zero, remove the item from the cart
      if (decreasedItem.quantity === 0) {
        return removeProduct(state, decreasedItem);
      }

      return {
        ...state,
        cartItems: decreasedCartItems,
        itemCount: state.itemCount - 1,
        total: state.total - decreasedItem.cost,
      };

    case "REMOVE_PRODUCT":
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: updatedCartItems,
        itemCount: state.itemCount - action.payload.quantity,
        total: state.total - action.payload.cost * action.payload.quantity,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
        itemCount: 0,
        total: 0,
      };

    default:
      return state;
  }
};

export const removeProduct = (state, removedProduct) => {
  const updatedCartItems = state.cartItems.filter(
    (item) => item.id !== removedProduct.id
  );
  return {
    ...state,
    cartItems: updatedCartItems,
    itemCount: state.itemCount - removedProduct.quantity,
    total: state.total - removedProduct.cost * removedProduct.quantity,
  };
};

export const increase = (dispatch, product) => {
  dispatch({ type: "INCREASE_QUANTITY", payload: product });
};

export const decrease = (dispatch, product) => {
  dispatch({ type: "DECREASE_QUANTITY", payload: product });
};

export const clearCart = (dispatch) => {
  dispatch({ type: "CLEAR_CART" });
};

export default CartReducer;
