import React from "react";
import { FaTools, FaShippingFast, FaHeadset } from "react-icons/fa";
import "./featured.css";

const Featured = () => {
  return (
    <section className="featured-section">
      <div className="featured-header">
        <h2>Why Choose Us?</h2>
        <p>Experience quality, speed, and support like never before.</p>
      </div>

      <div className="featured-flex">
        <div className="feature-card">
          <FaTools className="feature-icon" />
          <h4>Premium Tools</h4>
          <p>High-quality hardware engineered for long-term durability.</p>
        </div>

        <div className="feature-card">
          <FaShippingFast className="feature-icon" />
          <h4>Fast Delivery</h4>
          <p>Reliable and rapid doorstep delivery across all major cities.</p>
        </div>

        <div className="feature-card">
          <FaHeadset className="feature-icon" />
          <h4>24/7 Support</h4>
          <p>Always available to help solve your product or service queries.</p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
