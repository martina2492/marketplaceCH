import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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
    <div className="bg-div">
      <div className="form-div">
        <h1>Sign in to your account</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="container-small">
            <label>Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>
          <div className="container-small">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </div>
          <button className="signinBtn" type="submit">
            Sign in
          </button>
        </form>
        <p>
          Don't have an account yet? <Link to="/signup">Sign up</Link>
        </p>
        <div className="bottom">
          <div>
            <Link to="/">
              <img
                className="logo-sm"
                alt="logo"
                src="https://logos-world.net/wp-content/uploads/2022/11/Sprouts-Farmers-Market-Logo.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
