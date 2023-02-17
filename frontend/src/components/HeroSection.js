import React from "react";
import styled from "styled-components";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
import TopRated from "./TopRated";
import Farmers from "./Farmers";

const HeroSectionWrapper = styled.section`
  height: 30vh;
  display: flex;
  flex-direction: column;
  padding: 8% 8% 2% 8%;
  align-items: start;
  justify-content: center;
  background-image: url(https://as1.ftcdn.net/v2/jpg/04/62/19/12/1000_F_462191230_CAJrFs795MeoyGZAADqcgEMs59geYxGa.jpg);
  background-size: cover;
  background-position: center;
  position: relative;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); // Change the opacity here
  }
  @media (max-width: 768px) {
    height: 80vh;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const SeeProductsBtn = styled.button`
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
  padding: 10px 24px 10px 50px;
  color: #ffffff;
  font-size: 16px;
  margin: 20px 0;
  cursor: pointer;

  &:hover {
    background-color: linear-gradient(
      90deg,
      #1d953f 0%,
      #209542 20.343056921228012%,
      #7fc493 20.343056921228012%,
      #4dde76 100%
    );
  }
`;

const MainHeader = styled.div`
  display: flex;
  z-index: 3;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Natural = styled.h1`
  font-size: 3em;
  z-index: 3;
  margin-bottom: 0;
  padding-bottom: 0;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Energy = styled.span`
  font-size: 3em;
  color: white;
  z-index: 3;
  margin-bottom: 0;
  padding-bottom: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MainHeaderDescription = styled.h3`
  text-decoration: overline;
  z-index: 3;
  color: white;
  font-weight: 300;
`;

const OfferWrapper = styled.section`
  background-color: #e9f5db;
  /*   background-image: url(https://www.shutterstock.com/image-illustration/veggie-seamless-pattern-vegetables-food-260nw-715706950.jpg); */
  padding: 2% 0 2% 0;
`;

const Offers = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  margin: auto;
  align-items: stretch;
  @media (max-width: 768px) {
    width: 80%;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const Offer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background-color: white;
  color: #1d953f69;
  border: 1px solid #c4c4c4;
  padding: 3%;
  margin: 2%;
  box-shadow: 0 2px 10px rgba(29, 149, 63, 0.3);
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #1d953f69;
    box-shadow: 0 6px 20px rgba(29, 149, 63, 0.4);
    transform: scale(1.01);
  }
`;

const OfferTitle = styled.h4`
  margin-top: 10px;
  text-transform: uppercase;
`;

const OfferIcon = styled.i`
  font-size: 1.5em;
  color: #1d953f69;
  margin-bottom: 2px;
`;

const SectionTitle = styled.h2`
  color: #074519ad;
  text-align: center;
  position: relative;
  margin: 2% 0;
  font-size: 1.5em;
  font-weight: 400;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background-color: #074519ad;
  }
`;

const HeroSection = () => {
  return (
    <div>
      <HeroSectionWrapper>
        <MainHeader>
          <Natural>NATURAL </Natural>
          <Energy> ENERGY BOOST</Energy>
        </MainHeader>
        <MainHeaderDescription>
          Reach for some fresh fruits and veggies!
        </MainHeaderDescription>
        <Link to="/products" style={{ zIndex: 999 }}>
          <SeeProductsBtn>See our products</SeeProductsBtn>
        </Link>
      </HeroSectionWrapper>
      <Farmers />

      <SectionTitle>Our Top Rated Products</SectionTitle>

      <TopRated />

      <OfferWrapper>
        <SectionTitle>What we offer</SectionTitle>
        <Offers>
          <Offer>
            <OfferIcon className="fas fa-shipping-fast"></OfferIcon>
            <OfferTitle>Free Delivery</OfferTitle>
            <p>Offer description goes here</p>
          </Offer>
          <Offer>
            <OfferIcon className="fas fa-clock"></OfferIcon>
            <OfferTitle>24/7 Support</OfferTitle>
            <p>Offer description goes here</p>
          </Offer>
          <Offer>
            <OfferIcon className="fas fa-shield-alt"></OfferIcon>
            <OfferTitle>100% Secure Payment</OfferTitle>
            <p>Offer description goes here</p>
          </Offer>
        </Offers>
      </OfferWrapper>
      <Testimonials />
    </div>
  );
};

export default HeroSection;
