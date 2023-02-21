import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartContext from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
`;

const ItemImage = styled.img`
  width: 150px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ItemName = styled.h3`
  font-size: 1.2rem;
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
  padding: 5px 10px;
`;

const QuantityNumber = styled.span`
  font-size: 1.1rem;
`;

const RemoveButton = styled.button`
  background-color: #e04f5f;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  margin: auto 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const ClearCartButton = styled.button`
  background-color: #e04f5f;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  width: 100%;
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
    dispatch,
    removeProduct,
    increase,
    decrease,
    clearCart,
  } = useContext(CartContext);

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };

  const handleIncrease = (product) => {
    dispatch(increase(product));
  };

  const handleDecrease = (product) => {
    dispatch(decrease(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartIsEmpty = cartItems.length === 0;

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
                    <ItemPrice>${product.cost.toFixed(2)}</ItemPrice>
                    <Quantity>
                      <QuantityButton onClick={() => handleDecrease(product)}>
                        -
                      </QuantityButton>
                      <QuantityNumber>{product.quantity}</QuantityNumber>
                      <QuantityButton onClick={() => handleIncrease(product)}>
                        +
                      </QuantityButton>
                    </Quantity>
                    <ItemTotal>
                      ${(product.cost * product.quantity).toFixed(2)}
                    </ItemTotal>
                  </ItemDetails>
                  <RemoveButton onClick={() => handleRemoveProduct(product)}>
                    Remove
                  </RemoveButton>
                </CartItem>
              ))}
            </CartItemsContainer>
            <CartTotal>
              Total ({itemCount} {itemCount === 1 ? "product" : "products"}): $
              {total.toFixed(2)}
            </CartTotal>
            <ButtonsContainer>
              <ClearCartButton onClick={() => handleClearCart()}>
                Clear Cart
              </ClearCartButton>
              <Link to="/checkout">
                <CheckoutButton>Proceed to Checkout</CheckoutButton>
              </Link>
            </ButtonsContainer>
          </>
        )}
      </ShoppingCartContainer>
      <Footer />
    </>
  );
};

export default ShoppingCart;
