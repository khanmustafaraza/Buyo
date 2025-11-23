import React from "react";
import { FaSearch, FaShoppingCart, FaBell, FaUserCircle } from "react-icons/fa";
import "./TopBar.css";

const TopBar = () => {
  return (
    <header className="topbar w-100">
      <div className="topbar-center">
        <div className="search-box">
          <span className="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search products..." />
        </div>
      </div>

      <div className="topbar-right">
        <div className="icon">
          <FaBell />
          <span className="badge">3</span>
        </div>

        <div className="profile">
          <span className="material-symbols-outlined">account_circle</span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
