import { ShoppingCartOutlined } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const ProductCard = styled.div`
  display: flex;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  height: 25vh;
  max-width: 350px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 50vh;
  }
`;

const ProductHeader = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2% 4%;

  @media (max-width: 768px) {
    padding: 2%;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 100%;
  z-index: 2;
  object-fit: contain;
  border-radius: 8px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.05);
  }
`;

const AddToCartBtn = styled.button`
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
  padding: 6px 12px 6px 25px;
  color: #ffffff;
  font-size: 10px;
  margin: 20px 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    background-color: linear-gradient(
      90deg,
      #1d953f 0%,
      #209542 20.343056921228012%,
      #7fc493 20.343056921228012%,
      #4dde76 100%
    );
  }
`;

const Product = ({ product }) => {
  const productId = product.id;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${productId}`);
  };

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <ProductCard>
      <Container>
        <Circle />
        <Image src={product.image} alt={product.title} />
        <Info>
          <Icon onClick={handleAddToCart}>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlinedIcon />
          </Icon>
        </Info>
      </Container>
      <ProductHeader>
        <Button color="success" onClick={handleClick}>
          {product.title}
        </Button>
        <span>${product.cost}</span>
        <Rating
          name="product-rating"
          value={product.rating}
          precision={0.5}
          readOnly
        />
        <AddToCartBtn onClick={addToCart}>ADD TO CART</AddToCartBtn>
      </ProductHeader>
    </ProductCard>
  );
};

export default Product;
