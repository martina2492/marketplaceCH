import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import "./SignUp.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="bg-div">
      <div className="form-div">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className="container-small">
            <label>Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" />
          </div>
          <div className="container-small">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <button className="signupBtn">Sign up</button>
        </form>
        <p>
          Already have an account? <Link to="/">Sign In</Link>
        </p>
        <div className="bottom">
          <div>
            <img
              className="logo-sm"
              alt="logo"
              src="https://scontent.fmbx2-1.fna.fbcdn.net/v/t1.18169-9/22281999_10154938092665777_3117443772466335971_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SgbCOIAclpYAX_kc9Wa&_nc_ht=scontent.fmbx2-1.fna&oh=00_AfD_1pN_j2WgPatkcTUD_UlNyEdZMYPObuKvm6ZQ7OVG4g&oe=6410A612"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
