import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { useAuth } from "../context/AuthContext";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  margin: 2% 0;
  border: none;
  background-color: transparent;
  box-shadow: 2px 2px 8px #888888;
  width: 100%;
  margin: auto;

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
  width: 150px;
  height: 150px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

const ProductTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  color: #353839;
`;
const ProductDate = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 200;
  color: #353839;
`;
const ProductDescription = styled.p`
  margin: 10px 0;
  font-size: 14px;
  font-style: italic;
  font-weight: 200;
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
  font-size: 12px;
  color: #f8e825;
`;

/* comments */

const CommentSectionWrapper = styled.div`
  margin-top: 20px;
  background-color: white;
  width: 100%;
  margin: auto;
`;

const CommentList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1%;
  border: 1px solid ghostwhite;
  background-color: white;

  box-shadow: 2px 2px 8px #888888;
`;

const CommentItem = styled.li`
  margin-bottom: 10px;
  border: none;
  background-color: white;
  height: 25px;
`;

const CommentText = styled.p`
  font-size: 16px;
  color: black;
  margin: 0;
  border: 1px solid ghostwhite;
`;

const CommentFormWrapper = styled.div`
  margin: 20px 0;
  border: none;
`;

const CommentForm = styled.form`
  display: flex;
  padding: 1%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;

const CommentTextarea = styled.textarea`
  resize: none;
  border-radius: 2px;
  border: 0.5px solid lightgray;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #353839;
  background-color: #f5f5f5;
  height: 70px;
  width: 80%;
  margin: auto;
`;

const PromptMessage = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-top: 2rem;
  cursor: pointer;
`;

/* const WelcomeMessage = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-top: 2rem;
  cursor: pointer;
`; */

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state.product;
  const [comments, setComments] = useState(product.comments);
  const [commentText, setCommentText] = useState("");
  const productId = product.id;
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:8080/products/${productId}/comments`)
      .then((response) => response.json())
      .then((data) =>
        setComments(
          Array.isArray(data) ? [...comments, ...data] : [...comments, data]
        )
      )
      .catch((error) => console.error(error));
  }, [productId]);

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (!commentText) {
      return;
    }
    const newComment = {
      text: commentText,
    };
    fetch(`http://localhost:8080/products/${productId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) => {
        setComments([...comments, data]);
        setCommentText("");
      })
      .catch((error) => console.error(error));
  };
  return (
    <AuthProvider>
      <Navbar />
      <FlexWrapper>
        <ProductWrapper>
          <ProductImage src={product.image} alt={product.title} />
          <ProductDetails>
            <div>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDate>{product.date}</ProductDate>
              <ProductRating>
                {product.rating} <i className="fas fa-star"></i>
              </ProductRating>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductCost>${product.cost}</ProductCost>

              <Button color="success">Add to cart</Button>
            </div>
          </ProductDetails>
        </ProductWrapper>
        <CommentSectionWrapper>
          {user ? (
            <>
              <CommentList>
                {comments.map((comment) => (
                  <CommentItem>
                    <CommentText>{comment.text}</CommentText>
                  </CommentItem>
                ))}
                <CommentFormWrapper>
                  <CommentForm>
                    <CommentTextarea
                      placeholder="Write your comment here..."
                      value={commentText}
                      onChange={(event) => setCommentText(event.target.value)}
                    />
                    <Button
                      color="success"
                      variant="text"
                      onClick={handleCommentSubmit}
                    >
                      Comment
                      <SendIcon />
                    </Button>
                  </CommentForm>
                </CommentFormWrapper>
              </CommentList>
            </>
          ) : (
            <PromptMessage>Please log in to leave a comment.</PromptMessage>
          )}
        </CommentSectionWrapper>
      </FlexWrapper>
      <Footer />
    </AuthProvider>
  );
};

export default ProductDetail;
