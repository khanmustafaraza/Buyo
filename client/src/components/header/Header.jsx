import React from "react";
import "./header.css";
import { FaTruck, FaTag, FaHeadset, FaCreditCard } from "react-icons/fa"; // Icons

const Header = () => {
  return (
    <div className="marquee">
      <div className="marquee-content p-2">
        <div className="item">
          <FaTruck className="icon" /> Free Shipping on Orders Above ₹500
        </div>
        <div className="item">
          <FaTag className="icon" /> 50% Off on Summer Collection!
        </div>
        <div className="item">
          <FaHeadset className="icon" /> 24/7 Customer Support Available
        </div>
        <div className="item">
          <FaCreditCard className="icon" /> Easy & Secure Payments
        </div>
        <div className="item">
          <FaTag className="icon" /> Limited Time Offer: Grab Now!
        </div>
      </div>
    </div>
  );
};

export default Header;
