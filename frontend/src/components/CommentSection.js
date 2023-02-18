import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const CommentSectionWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  border: 1px solid grey;
  background-color: white;
  width: 50%;
  margin: auto;
`;

const CommentList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1%;
  border: 1px solid grey;
  background-color: white;
  height: 100px;
  box-shadow: 2px 2px 8px #888888;
`;

const CommentItem = styled.li`
  margin-bottom: 10px;
  border: 1px solid black;
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
  border: 1px solid red;
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
  border: 1px solid gray;
  background-color: white;
  box-shadow: 2px 2px 8px #888888;
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
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (!commentText) {
      return;
    }
    try {
      const token = await user.getIdToken();
      const response = await fetch("http://localhost:8080/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ comment: commentText }),
      });
      if (response.ok) {
        // add new comment to the comments array
        setComments([...comments, commentText]);
        // clear the comment text
        setCommentText("");
      } else {
        console.error("Failed to post comment");
      }
    } catch (error) {
      console.error(error);
    }
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
      </CommentList>
      <CommentFormWrapper>
        <CommentForm>
          <CommentTextarea
            placeholder="Write your comment here..."
            value={commentText}
            onChange={(event) => setCommentText(event.target.value)}
          />
          <Button color="success" variant="text" onClick={handleCommentSubmit}>
            Comment
            <SendIcon />
          </Button>
        </CommentForm>
      </CommentFormWrapper>
    </CommentSectionWrapper>
  );
};

export default CommentSection;
