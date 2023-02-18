import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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

const CommentSectionWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const CommentList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CommentItem = styled.li`
  margin-bottom: 10px;
`;

const CommentAuthor = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #074519;
  margin: 0;
`;

const CommentText = styled.p`
  font-size: 16px;
  color: #353839;
  margin: 0;
`;

const CommentFormWrapper = styled.div`
  margin-top: 20px;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const CommentTextarea = styled.textarea`
  resize: none;
  border-radius: 8px;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #353839;
`;

const CommentSubmitButton = styled.button`
  align-self: flex-end;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  background-color: #074519;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #065014;
  }
`;

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/products`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Product fetched successfully:", data);
        setProduct(this.product);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
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
            <ProductTitle>{this.product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductCost>${product.cost}</ProductCost>
            <ProductRating>
              {product.rating} <i className="fas fa-star"></i>
            </ProductRating>
          </div>
        </ProductDetails>
      </ProductWrapper>
      <CommentSectionWrapper>
        <CommentList>
          <CommentItem>
            <CommentAuthor></CommentAuthor>
            <CommentText></CommentText>
          </CommentItem>
        </CommentList>
        <CommentFormWrapper>
          <CommentTextarea />
          <CommentSubmitButton />
        </CommentFormWrapper>
      </CommentSectionWrapper>
      <Footer />
    </>
  );
};

export default ProductDetail;
