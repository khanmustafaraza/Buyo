import React from "react";
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FaBagShopping } from "react-icons/fa6";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { state } = useAuth();
  const { cartItems } = useCart();
  console.log(state.token);

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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
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
                {/* <li>
                  <a className="dropdown-item" href="#">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Best Deals
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Bulk Orders
                  </a>
                </li> */}
              </ul>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Deals
              </a>
            </li> */}
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
          </ul>

          {/* Right Icons */}
          <div className="d-flex align-items-center gap-3 flex-wrap">
            {/* Search Box */}

            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              style={{ width: "250px" }}
            />

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
                {/* <span className="cart-badge">{cartItems.length}</span> */}
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
                    "welcome"
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
