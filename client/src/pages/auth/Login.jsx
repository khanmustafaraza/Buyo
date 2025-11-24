import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "./auth.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
 const {state,handleLoginChange,handleLoginSubmit} =  useAuth()

  return (
   <>
   <Navbar/>
    <div className="auth-container d-flex justify-content-center align-items-center">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Login to continue shopping</p>

        <form onSubmit={handleLoginSubmit}>
          {/* Email */}
          <div className="mb-3 position-relative">
            <label className="auth-label">Email</label>
            <span className="auth-icon">
              <FaEnvelope />
            </span>
            <input
              type="email"
              className="form-control auth-input with-icon"
              placeholder="Enter your email"
              name="email"
              value={state.login.email}
              onChange={handleLoginChange}
            />
          </div>

          {/* Password */}
          <div className="mb-3 position-relative">
            <label className="auth-label">Password</label>
            <span className="auth-icon">
              <FaLock />
            </span>

            <input
            name="password"
            onChange={handleLoginChange}
            value={state.login.password}
              type={showPassword ? "text" : "password"}
              className="form-control auth-input with-icon"
              placeholder="Enter your password"
            />

            <span
              className="auth-eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button className="auth-btn w-100">Login</button>

          <p className="auth-switch mt-3">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </div>
   <Footer/>
   </>
  );
};

export default Login;
