import React from "react";
import { FaTools, FaShippingFast, FaHeadset } from "react-icons/fa";
import "./featured.css";

const Featured = () => {
  return (
    <section className="features-section py-5">
      <div className="container text-center">
        <h2 className="section-title">Why Choose Us?</h2>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="feature-card">
              <FaTools className="icon" />
              <h5>Premium Tools</h5>
              <p>High-quality tools tested for durability and performance.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <FaShippingFast className="icon" />
              <h5>Fast Delivery</h5>
              <p>Lightning-fast and reliable shipping worldwide.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <FaHeadset className="icon" />
              <h5>24/7 Support</h5>
              <p>Expert assistance whenever you need help or advice.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
