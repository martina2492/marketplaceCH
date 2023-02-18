import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2%;
  min-height: 70vh;
`;

const CartTitle = styled.h1`
  text-align: center;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2%;
`;

const ItemImage = styled.img`
  width: 25%;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const ItemName = styled.h2`
  margin-bottom: 2%;
`;

const ItemPrice = styled.h3`
  margin-bottom: 2%;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  background-color: #9bc400;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  height: 30px;
  margin: 0 5px;
  width: 30px;
`;

const ItemTotal = styled.h3`
  margin-bottom: 2%;
`;

const CartTotal = styled.h2`
  margin-top: 2%;
  text-align: right;
`;

const CheckoutButton = styled.button`
  background-color: #9bc400;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 2%;
  width: 100%;
`;

const ShoppingCart = () => {
  const {
    cartItems,
    itemCount,
    total,
    increase,
    decrease,
    removeProduct,
    clearCart,
  } = useContext(CartContext);

  const cartIsEmpty = cartItems.length === 0;

  return (
    <>
      <Navbar />
      <Wrapper>
        <CartTitle>Your Shopping Cart</CartTitle>
        {cartIsEmpty ? (
          <p>Your cart is currently empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <ItemImage src={item.image} alt={item.name} />
                <ItemDetails>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                  <Quantity>
                    <QuantityButton onClick={() => decrease(item)}>
                      -
                    </QuantityButton>
                    {item.quantity}
                    <QuantityButton onClick={() => increase(item)}>
                      +
                    </QuantityButton>
                  </Quantity>
                  <ItemTotal>
                    ${(item.price * item.quantity).toFixed(2)}
                  </ItemTotal>
                </ItemDetails>
                <button onClick={() => removeProduct(item)}>Remove Item</button>
              </CartItem>
            ))}
            <CartTotal>
              Total ({itemCount} {itemCount === 1 ? "item" : "items"}): ${total}
            </CartTotal>
            <CheckoutButton onClick={() => clearCart()}>
              Clear Cart
            </CheckoutButton>
            <Link to="/checkout">
              <CheckoutButton>Proceed to Checkout</CheckoutButton>
            </Link>
          </>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

export default ShoppingCart;
