const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART_ITEMS":
      return { ...state, cartItems: action.payload };
    case "ADD_PRODUCT": {
      const existingItem = state.cartItems.find(
        (product) => product.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case "REMOVE_PRODUCT":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case "INCREASE":
      return {
        ...state,
        cartItems: state.cartItems.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case "DECREASE": {
      const existingItem = state.cartItems.find(
        (product) => product.id === action.payload.id
      );
      if (existingItem.quantity > 1) {
        return {
          ...state,
          cartItems: state.cartItems.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ),
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (product) => product.id !== action.payload.id
          ),
        };
      }
    }
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
