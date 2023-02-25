import styled from "styled-components";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FastForwardIcon from "@mui/icons-material/FastForward";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const Wrap = styled.div`
  background-color: ${(props) =>
    props.themeMode === "light" ? "white" : "#222"};
  color: ${(props) => (props.themeMode === "light" ? "#222" : "white")};
`;
const TopRatedWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  margin-bottom: 3%;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 5%;
  }
`;

const TopRatedItem = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  align-items: center;
  border: 1px solid #0745191c;
  border-radius: 8px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  padding: 1% 5%;
  margin-bottom: 4%;
`;

const TopRatedImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 10%;
`;

const TopRatedName = styled.h3`
  margin: 2% 0;
  font-size: 24px;
  font-weight: 400;
  color: #353839;
`;

const TopRatedRating = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #f8e825;
`;

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);
  const { themeMode } = useContext(ThemeContext);

  useEffect(() => {
    const fetchTopRatedProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        const products = data.products
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3);
        setTopRated(products);
      } catch (error) {
        console.error(`An error occurred: ${error}`);
      }
    };

    fetchTopRatedProducts();
  }, []);
  const navigate = useNavigate();
  const handleShop = () => {
    navigate("/products");
  };

  return (
    <Wrap themeMode={themeMode}>
      <TopRatedWrapper>
        {topRated.map((product) => (
          <TopRatedItem key={product.id}>
            <TopRatedImage src={product.image} alt={product.title} />
            <TopRatedRating>
              {product.rating} <i className="fas fa-star"></i>
            </TopRatedRating>
            <TopRatedName>
              {product.title} - ${product.cost}
            </TopRatedName>
            <Button onClick={handleShop} color="success" variant="text">
              Shop now <FastForwardIcon />
            </Button>
          </TopRatedItem>
        ))}
      </TopRatedWrapper>
    </Wrap>
  );
};

export default TopRated;
