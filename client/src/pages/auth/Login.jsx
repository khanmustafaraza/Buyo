import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "./auth.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useAuth } from "../../context/AuthContext";
import { RiLoginBoxFill } from "react-icons/ri";
// import { SiSimplelogin } from "react-icons/si";
import { NavLink, useNavigate, Navigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { state, handleLoginChange, handleLoginSubmit } = useAuth();
  // console.log(state, navigate());

  return state?.token ? (
    <Navigate to="/" replace />
  ) : (
    <>
      <Navbar />
      <div className="auth-container d-flex justify-content-center align-items-center">
        <div className="auth-card">
          <div className="d-flex justify-content-center register-icon">
            <RiLoginBoxFill className="fs-1 text-white" />
          </div>
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Login to continue shopping</p>
          {state && state?.isLoading && <Loader />}

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
              Don't have an account?{" "}
              <NavLink to="/register">
                <span className="text-decoration-underline text-primary">
                  Register
                </span>
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
