import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "./auth.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container d-flex justify-content-center align-items-center">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Join us today!</p>

        <form>
          {/* Name */}
          <div className="mb-3 position-relative">
            <label className="auth-label">Full Name</label>
            <span className="auth-icon">
              <FaUser />
            </span>
            <input
              type="text"
              className="form-control auth-input with-icon"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-3 position-relative">
            <label className="auth-label">Email</label>
            <span className="auth-icon">
              <FaEnvelope />
            </span>
            <input
              type="email"
              className="form-control auth-input with-icon"
              placeholder="Enter email"
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
              placeholder="Enter password"
            />

            <span
              className="auth-eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button className="auth-btn w-100">Register</button>

          <p className="auth-switch mt-3">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
