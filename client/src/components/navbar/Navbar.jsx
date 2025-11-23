import React from "react";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          IronHardware
        </a>

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
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Shop
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    All Products
                  </a>
                </li>
                <li>
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
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Deals
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
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
            <div className="position-relative">
              <FaHeart className="icon-outline" title="WhistList" />
            </div>

            {/* Cart */}
            <div className="position-relative">
              <FaShoppingCart className="icon-outline" title="WhistList" />
              <span className="cart-badge">3</span>
            </div>

            {/* Profile */}
            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown">
                <li
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <FaUser
                    className="icon-outline"
                    title={<div className="bg-danger text-danger">Title</div>}
                  />
                </li>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Address
                    </a>
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
