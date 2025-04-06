import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response= await axios
        .post(
          "http://localhost:4000/api/v1/user/login",
          { email, password, confirmPassword, role: "Patient" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );
        toast.success(response.data.message);
        setIsAuthenticated(true);
        navigateTo("/");
        }
     catch (error) {
        toast.error(error.response.data.message);
     }
    };


  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="signin-box">
      <h1>Sign In</h1>
      <p className="subtitle">
        Welcome back! Log in to access your dashboard, book appointments, and stay connected with your healthcare needs.
      </p>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="register-section">
        <p>New Here?</p>
        <Link to="/register">Register Now</Link>
      </div>
    </div>
  );
};

export default Login;
