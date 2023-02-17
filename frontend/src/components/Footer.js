import styled from "styled-components";

const Container = styled.div`
  background-color: #e9f5db;
  /*   background-color: linear-gradient(
    to top,
    rgba(193, 223, 196, 0.5),
    rgba(222, 236, 221, 0.5)
  ); */
  background-size: cover;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #1d953f69;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Icon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1d953f69;
  font-size: 24px;
  margin: 0 10px;
  border: 1px solid #0080006b;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  box-shadow: 0px 10px 20px 15px #e9f5db;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 100%;
  margin-top: 2%;

  /*   margin-top: -10vh;
  margin-bottom: -10vh;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); */
`;

const FooterBg = styled.div`
  background-image: url(https://www.shutterstock.com/image-illustration/veggie-seamless-pattern-vegetables-food-260nw-715706950.jpg);
  width: 100%;
  height: 100%;
  background-position: center;
`;

const Footer = () => {
  const phone = "123-456-7890";
  const address = "123 Main St, Anytown, USA";

  return (
    <>
      <Container>
        <IconsContainer>
          <Icon href="https://www.facebook.com">
            <i className="fab fa-facebook"></i>
          </Icon>
          <Icon href="https://www.instagram.com">
            <i className="fab fa-instagram"></i>
          </Icon>
          <Icon href="https://www.twitter.com">
            <i className="fab fa-twitter"></i>
          </Icon>
          <Icon href="https://www.linkedin.com">
            <i className="fab fa-linkedin"></i>
          </Icon>
          <Icon href="https://www.youtube.com">
            <i className="fab fa-youtube"></i>
          </Icon>
        </IconsContainer>
        <p>{phone}</p>
        <p>{address}</p>
        <FooterContainer>
          <FooterBg></FooterBg>;
        </FooterContainer>
      </Container>
    </>
  );
};

export default Footer;
