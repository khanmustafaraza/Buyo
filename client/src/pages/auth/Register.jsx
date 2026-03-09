import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./auth.css";
import { useAuth } from "../../context/AuthContext";
import { MdManageAccounts } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { state, handleRegisterChange, handleRegisterSubmit } = useAuth();

  return (
    <>
      <Navbar />

      <div className="auth-container d-flex justify-content-center align-items-center">
        <div className="auth-card">
          <div className="d-flex justify-content-center register-icon">
            <MdManageAccounts className="fs-1 text-white" />
          </div>
          {state && state?.isLoading && <Loader />}
          <h2 className="auth-title">Create Account</h2>
          <p className="auth-subtitle">Join us today!</p>

          <form onSubmit={handleRegisterSubmit}>
            {/* Name */}
            <div className="mb-3 position-relative">
              <label className="auth-label">Full Name</label>
              <span className="auth-icon">
                <FaUser />
              </span>
              <input
                type="text"
                name="name"
                value={state.register.name}
                onChange={handleRegisterChange}
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
                name="email"
                value={state.register.email}
                onChange={handleRegisterChange}
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
                value={state.register.password}
                name="password"
                onChange={handleRegisterChange}
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
              Already have an account?{" "}
              <NavLink to="/login">
                <span className="text-decoration-underline text-primary">
                  Login
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

export default Register;
