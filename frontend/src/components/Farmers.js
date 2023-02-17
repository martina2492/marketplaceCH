import React from "react";
import styled from "styled-components";

const FarmersImgWrapper = styled.div`
  width: 100%;
  background-color: #e9f5db61;
  margin: 0 auto;
`;

const FarmersImg = styled.div`
  display: flex;
  justify-content: center;
  background-image: url("https://cdn3.vectorstock.com/i/1000x1000/30/17/support-local-farmers-creative-organic-eco-vector-13563017.jpg");
  background-size: cover;
  background-position: center;
  width: 25%;
  margin: 0 auto;
  padding-top: 3%;
  height: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Farmers = () => {
  return (
    <FarmersImgWrapper>
      <FarmersImg />
    </FarmersImgWrapper>
  );
};

export default Farmers;
