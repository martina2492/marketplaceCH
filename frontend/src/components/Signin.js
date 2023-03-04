import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import styled from "styled-components";

export const Background = styled.div`
  background-color: #c8ebcf4f;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FormDiv = styled.div`
  min-width: 320px;
  background-color: white;
  padding: 3% 2%;
  border-radius: 24px;
  box-shadow: -1px 5 20 0px rgba(161, 138, 138, 0.77);
  -webkit-box-shadow: -1px 14px 64px 0px rgba(161, 138, 138, 0.77);
  -moz-box-shadow: -1px 5px 20 0px rgba(161, 138, 138, 0.77);
`;

export const ContainerSmall = styled.div`
  margin: 5% 2%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #1d953f2e;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #1d953f69;
`;

export const LogoSm = styled.img`
  height: 70px;
`;

export const Heading = styled.h1`
  margin-bottom: 10%;
  color: #1d953f;
  text-align: center;
  font-size: 36px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 6px;
  padding: 1%;
  color: #1d953f;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &:after {
    border: none;
  }
`;

export const SignInButton = styled.button`
  width: 100%;
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

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/account");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Background>
      <FormDiv>
        <Heading>Sign in to your account</Heading>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <ContainerSmall>
            <Label>Email Address</Label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </ContainerSmall>
          <ContainerSmall>
            <Label>Password</Label>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </ContainerSmall>
          <SignInButton type="submit">Sign in</SignInButton>
        </form>
        <p>
          Don't have an account yet? <Link to="/signup">Sign up</Link>
        </p>
        <Bottom>
          <div>
            <Link to="/">
              <LogoSm
                alt="logo"
                src="https://logos-world.net/wp-content/uploads/2022/11/Sprouts-Farmers-Market-Logo.png"
              />
            </Link>
          </div>
        </Bottom>
      </FormDiv>
    </Background>
  );
};

export default Signin;
