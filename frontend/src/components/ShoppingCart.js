import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CartContext from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

const ShoppingCartContainer = styled.div`
  margin: 50px auto;
  max-width: 1000px;
`;

const CartTitle = styled.h2`
  text-align: center;
`;

const EmptyCart = styled.p`
  text-align: center;
`;

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

const CartItem = styled.div`
  display: flex;
  gap: 20px;
  background-color: #e9f5db61;
  padding: 3%;
`;

const ItemImage = styled.img`
  width: 150px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ItemName = styled.h4`
  font-size: 0.5 rem;
`;

const ItemPrice = styled.span`
  font-size: 1.1rem;
`;

const Quantity = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const QuantityButton = styled.button`
  font-size: 1rem;
  padding: 2px 6px;
`;

const QuantityNumber = styled.span`
  font-size: 1.1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
`;

const ItemTotal = styled.h3`
  margin-bottom: 2%;
`;

const CartTotal = styled.h2`
  margin-top: 2%;
  text-align: right;
  align-items: stretch;
`;

const CheckoutButton = styled.button`
  z-index: 3;
  background: linear-gradient(
    90deg,
    #1d953f 0%,
    #209542 20.343056921228012%,
    #4dde76 20.343056921228012%,
    #4dde76 100%
  );
  border-radius: 8px;
  border: 0px solid #444444;
  border-width: 0px 0px 0px 0px;
  padding: 10px 24px 10px 50px;
  width: 100%;
  margin-top: 2%;
  color: #ffffff;
  font-size: 16px;

  cursor: pointer;

  &:hover {
    background-color: linear-gradient(
      90deg,
      #1d953f 0%,
      #209542 20.343056921228012%,
      #7fc493 20.343056921228012%,
      #4dde76 100%
    );
  }
`;

const ShoppingCart = () => {
  const {
    cartItems,
    clearCart,
    removeFromCart,
    increase,
    decrease,
    getCartTotal,
    getCartItemCount,
  } = useContext(CartContext);

  const total = getCartTotal();
  const itemCount = getCartItemCount();
  const navigate = useNavigate();

  const handleRemoveProduct = (product) => {
    // use removeFromCart instead if defined in CartProvider
    removeFromCart(product.id);
    saveCartItems();
    getCartItemCount(itemCount);
    getCartTotal(total);
  };

  const handleIncrease = (product) => {
    // use increase instead if defined in CartProvider
    increase(product.id);
    saveCartItems();
    getCartItemCount(itemCount);
    getCartTotal(total);
  };

  const handleDecrease = (product) => {
    // use decrease instead if defined in CartProvider
    decrease(product.id);
    saveCartItems();
    getCartItemCount(itemCount);
    getCartTotal(total);
  };

  const handleClearCart = () => {
    // use clearCart instead if defined in CartProvider
    clearCart();
    saveCartItems();
    getCartItemCount(itemCount);
    getCartTotal(total);
  };

  const cartIsEmpty = cartItems.length === 0;

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const response = await fetch("../util/validation");
      if (response.ok) {
        setLoggedIn(true);

        retrieveCartItems();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const retrieveCartItems = async () => {
    try {
      const response = await fetch("../data/product");
      if (response.ok) {
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleCheckout = () => {
    navigate(`/checkout`);
  };
  const saveCartItems = async () => {
    if (loggedIn) {
      try {
        await fetch("/api/cart-items", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cartItems),
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <ShoppingCartContainer>
        <CartTitle>Your Shopping Cart</CartTitle>
        {cartIsEmpty ? (
          <EmptyCart>Your cart is currently empty.</EmptyCart>
        ) : (
          <>
            <CartItemsContainer>
              {cartItems.map((product) => (
                <CartItem key={product.id}>
                  <ItemImage src={product.image} alt={product.title} />
                  <ItemDetails>
                    <ItemName>{product.title}</ItemName>
                    <ItemPrice>
                      <span>$</span>
                      {product.cost}
                    </ItemPrice>
                    <Quantity>
                      <QuantityButton onClick={() => handleDecrease(product)}>
                        -
                      </QuantityButton>
                      <QuantityNumber>{product.quantity}</QuantityNumber>
                      <QuantityButton onClick={() => handleIncrease(product)}>
                        +
                      </QuantityButton>
                    </Quantity>
                    <ItemTotal>{product.cost * product.quantity}</ItemTotal>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleRemoveProduct(product)}
                    >
                      Remove
                    </Button>
                  </ItemDetails>
                </CartItem>
              ))}
            </CartItemsContainer>
            <CartTotal>
              Total {itemCount} {itemCount === 1 ? "product" : "products"}: $
              {total}
              <ButtonsContainer>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleClearCart()}
                >
                  Clear Cart
                </Button>
                <Link to="/checkout">
                  <CheckoutButton onClick={handleCheckout}>
                    Proceed to Checkout
                  </CheckoutButton>
                </Link>
              </ButtonsContainer>
            </CartTotal>
          </>
        )}
      </ShoppingCartContainer>
      <Footer />
    </>
  );
};

export default ShoppingCart;
