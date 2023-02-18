import { useContext } from "react";
import CartContext from "../context/CartContext";

const ShoppingCart = () => {
  const { state, dispatch } = useContext(CartContext);

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE", payload: product });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {state.length === 0 && <p>Your cart is empty.</p>}
      {state.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => removeFromCart(product)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
