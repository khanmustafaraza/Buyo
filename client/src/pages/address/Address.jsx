import React from "react";
import { FaUser, FaPhoneAlt, FaCity, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdHome } from "react-icons/md";
import "./address.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Address = () => {
  return (
    <>
      <Navbar />
      <div className="address-page">
        <div className="address-container">
          <h2 className="address-title">Delivery Address</h2>

          <form className="address-form-grid">
            {/* Full Name */}
            <div className="input-group">
              <FaUser className="input-icon" />
              <input type="text" placeholder="Full Name" required />
            </div>

            {/* Mobile */}
            <div className="input-group">
              <FaPhoneAlt className="input-icon" />
              <input type="text" placeholder="Mobile Number" required />
            </div>

            {/* Email */}
            <div className="input-group">
              <MdEmail className="input-icon" />
              <input type="email" placeholder="Email Address" required />
            </div>

            {/* House / Flat */}
            <div className="input-group">
              <MdHome className="input-icon" />
              <input type="text" placeholder="House / Flat No" required />
            </div>

            {/* Street */}
            <div className="input-group">
              <FaMapMarkerAlt className="input-icon" />
              <input type="text" placeholder="Street / Area" required />
            </div>

            {/* City */}
            <div className="input-group">
              <FaCity className="input-icon" />
              <input type="text" placeholder="City" required />
            </div>

            {/* State */}
            <div className="input-group">
              <input type="text" placeholder="State" required />
            </div>

            {/* Pincode */}
            <div className="input-group">
              <input type="text" placeholder="Pincode" required />
            </div>
          </form>

          <button className="btn-address">Save Address</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Address;
