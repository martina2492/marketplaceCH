import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CommentSection from "../components/CommentSection";
import { Button } from "@mui/material";

const ProductWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  border: 1px solid red;
  background-color: transparent;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2% 4%;
  width: 100%;

  @media (max-width: 768px) {
    padding: 2%;
  }
`;

const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

const ProductTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  color: #353839;
`;

const ProductDescription = styled.p`
  margin: 10px 0;
  font-size: 18px;
  color: #353839;
`;

const ProductCost = styled.p`
  margin: 10px 0;
  font-size: 20px;
  color: #074519;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #f8e825;
`;

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/products`)
      .then((response) => response.json())
      .then((data) => {
        const product = data.find((p) => p.id === parseInt(id));
        setProduct(product);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <ProductWrapper>
        <ProductImage src={product.image} alt={product.title} />
        <ProductDetails>
          <div>
            <ProductTitle>"Product title"{product.title}</ProductTitle>
            <ProductDescription>
              description{product.description}
            </ProductDescription>
            <ProductCost>${product.cost}</ProductCost>
            <ProductRating>
              {product.rating} <i className="fas fa-star"></i>
            </ProductRating>
            <Button color="success">Add to cart</Button>
          </div>
        </ProductDetails>
      </ProductWrapper>
      <CommentSection />
      <Footer />
    </>
  );
};

export default ProductDetail;
