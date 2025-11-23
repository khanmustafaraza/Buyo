import React from "react";
import "./testimonials.css";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container text-center">
        <h2 className="testimonials-title">What Our Customers Say</h2>
        <p className="text-muted mb-4">
          Trusted by thousands of hardware buyers
        </p>

        <div className="row g-4 mt-3">
          <div className="col-md-4">
            <div className="testimonial-card">
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="testimonial-text">
                "Amazing service and top-quality products! Highly recommend."
              </p>
              <h6 className="testimonial-author">- Rahul Sharma</h6>
            </div>
          </div>

          <div className="col-md-4">
            <div className="testimonial-card">
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="testimonial-text">
                "Fast delivery and reliable tools. Great shopping experience!"
              </p>
              <h6 className="testimonial-author">- Priya Verma</h6>
            </div>
          </div>

          <div className="col-md-4">
            <div className="testimonial-card">
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="testimonial-text">
                "Their support team is extremely helpful. Five stars from me!"
              </p>
              <h6 className="testimonial-author">- Ankit Mehta</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
