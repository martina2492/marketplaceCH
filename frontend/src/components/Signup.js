import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Background,
  FormDiv,
  ContainerSmall,
  Label,
  LogoSm,
  Heading,
  Input,
  SignInButton,
  Bottom,
} from "../components/Signin";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signup, signin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // create a new user
      await signup(email, password);

      // sign in the newly created user
      await signin(email, password);

      // redirect to account page
      navigate("/account");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Background>
      <FormDiv>
        <Heading>Create an account</Heading>
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
          <SignInButton type="submit">Create account</SignInButton>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="http://localhost:3000/signin">Sign in</Link>
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

export default Signup;
