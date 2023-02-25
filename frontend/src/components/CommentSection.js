import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useEffect } from "react";

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

const CommentAuthor = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #074519;
  margin: 0;
  border: 1px solid red;
`;

const CommentText = styled.p`
  font-size: 16px;
  color: #353839;
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

const CommentSection = ({ user, productId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    fetch(`/api/comments/${productId}`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error(error));
  }, [productId]);

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (!commentText) {
      return;
    }
    const newComment = {
      author: user.email,
      text: commentText,
    };
    fetch(`http://localhost:8080/products/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    <CommentSectionWrapper>
      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment.id}>
            <CommentAuthor>{comment.author}</CommentAuthor>
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
    </CommentSectionWrapper>
  );
};

export default CommentSection;
