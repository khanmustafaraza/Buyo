import React from "react";
import {
  FaHamburger,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import "./navbar.css";
import { FaBagShopping } from "react-icons/fa6";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { useProduct } from "../../context/ProductContext";

const Navbar = () => {
  const { state } = useAuth();
  const { carts } = useCart();
  const { handleInputFilter } = useProduct();

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top">
      <div className="container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navbar-brand fw-bold isactive" : "navbar-brand fw-bold"
          }
        >
          Buyo Store
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <CiMenuFries className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink
                to="/home"
                className={({ isActive }) => {
                  return isActive ? "isactive" : "nav-link";
                }}
              >
                Home
              </NavLink>
            </li>

            {/* products */}

            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) => {
                  return isActive ? "isactive" : "nav-link";
                }}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive ? "isactive" : "nav-link";
                }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive ? "isactive" : "nav-link";
                }}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/user-dashboard"
                className={({ isActive }) => {
                  return isActive ? "isactive" : "nav-link";
                }}
              >
                <FaUser className="icon-outline" title="Account" />
              </NavLink>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="d-flex align-items-center gap-3 flex-wrap">
            {/* Search Box */}

            {/* Cart */}
            <NavLink
              to="/cart"
              className={({ isActive }) => {
                return isActive ? "isactive" : "nav-link";
              }}
            >
              <div className="position-relative">
                <FaBagShopping className="icon-outline" title="Bag" />
                <span className="cart-badge">{carts && carts?.length}</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
