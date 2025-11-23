import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "./auth.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container d-flex justify-content-center align-items-center">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Login to continue shopping</p>

        <form>
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
            />
          </div>

          {/* Password */}
          <div className="mb-3 position-relative">
            <label className="auth-label">Password</label>
            <span className="auth-icon">
              <FaLock />
            </span>

            <input
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
  );
};

export default Login;
