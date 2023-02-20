import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #1d953f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  top: 0;
  left: 0;
  width: 100%;
`;

const Announcement = () => {
  return (
    <Link to="/products">
      <Container>
        Super Deal! Extra discount of 10% on Orders Over $50!
      </Container>
    </Link>
  );
};

export default Announcement;
