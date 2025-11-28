import React, { useState } from "react";
import { FaUser, FaPhoneAlt, FaCity, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdHome } from "react-icons/md";
import "./address.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useAuth } from "../../context/AuthContext";

const Address = () => {
 const {handleAddressSubmit,handleAddressChange,state} =  useAuth()

  return (
    <>
      <Navbar />

      <div className="address-wrapper p-4">
        <div className="address-box container">
          <h2 className="title">Delivery Address</h2>

          <form className="address-form" onSubmit={(e)=>handleAddressSubmit(e)}>

            {/* Full Name */}
            <div className="field">
              <FaUser className="icon" />
              <input type="text" placeholder="Full Name" name="fullName" required 
              value={state.address.fullName}
              onChange={handleAddressChange}
              />
            </div>

            {/* Mobile */}
            <div className="field">
              <FaPhoneAlt className="icon" />
              <input type="text" placeholder="Mobile Number" required name="mobile"
              
              value={state.address.mobile}
              onChange={handleAddressChange}
              />
            </div>

            {/* Email */}
            <div className="field">
              <MdEmail className="icon" />
              <input type="email" placeholder="Email Address" required 
              name ="email"
              value={state.address.email}
              onChange={handleAddressChange}
              
              />
            </div>

            {/* House / Flat No */}
            <div className="field">
              <MdHome className="icon" />
              <input type="text" placeholder="House / Flat No" required
              
               name ="houseNo"
              value={state.address.houseNo}
              onChange={handleAddressChange}
              
              />
            </div>

            {/* Street */}
            <div className="field">
              <FaMapMarkerAlt className="icon" />
              <input type="text" placeholder="Street / Area" required
               name ="street"
              value={state.address.street}
              onChange={handleAddressChange}
              />
            </div>

            {/* City */}
            <div className="field">
              <FaCity className="icon" />
              <input type="text" placeholder="City" required
              
               name ="city"
              value={state.address.city}
              onChange={handleAddressChange}
              />
            </div>

            {/* State */}
            <div className="field">
              <input type="text" placeholder="State" required
              
               name ="state"
              value={state.address.state}
              onChange={handleAddressChange}
              />
            </div>

            {/* Pincode */}
            <div className="field">
              <input type="text" placeholder="Pincode" required name="pincode"
             
              value={state.address.pincode}
              onChange={handleAddressChange}
              />
            </div>

           

          

            <button type="submit" className="save-btn">Save Address</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Address;
