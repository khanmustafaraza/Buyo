import React from "react";
import "./header.css";
import { FaTruck, FaTag, FaHeadset, FaCreditCard } from "react-icons/fa"; // Icons

const Header = () => {
  return (
    <div className="marquee">
      <div className="marquee-content p-2">
        <div className="item">
          <FaTruck className="header-icon" /> Free Shipping on Orders Above ₹500
        </div>
        <div className="item">
          <FaTag className="header-icon" /> 50% Off on Summer Collection!
        </div>
        <div className="item">
          <FaHeadset className="header-icon" /> 24/7 Customer Support Available
        </div>
        <div className="item">
          <FaCreditCard className="header-icon" /> Easy & Secure Payments
        </div>
        <div className="item">
          <FaTag className="header-icon" /> Limited Time Offer: Grab Now!
        </div>
      </div>
    </div>
  );
};

export default Header;
