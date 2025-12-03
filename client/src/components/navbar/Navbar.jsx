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

const Navbar = () => {
  const { state } = useAuth();
  const { carts } = useCart();

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

        <div className="collapse navbar-collapse" id="navbarNav">
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

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Shop
              </span>

              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/products">
                    Products
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="d-flex align-items-center gap-3 flex-wrap">
            {/* Search Box */}

            <div className=" d-flex navbar-search align-items-center gap-1 py-2 px-3">
              <FaSearch />
              <input
                type="text"
                className=""
                placeholder="Search Products..."
              />
            </div>

            {/* Wishlist Icon */}
            {/* Wishlist */}
            {/* <div className="position-relative">
              <FaHeart className="icon-outline" title="WhistList" />
            </div> */}

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

            {/* Profile */}
            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <FaUser
                    className="icon-outline"
                    title={<div className="bg-danger text-danger">Profile</div>}
                  />
                </span>

                <ul className="dropdown-menu">
                  {state?.token ? (
                    <li className="dropdown-item">Hello Adon</li>
                  ) : (
                    <li>
                      <NavLink className="dropdown-item" to="/login">
                        Login
                      </NavLink>
                    </li>
                  )}
                  <li>
                    <NavLink className="dropdown-item" to="/user-details">
                      Address
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
