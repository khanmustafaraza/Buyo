import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 hero-text">
            <h1 className="hero-title">
              Upgrade Your{" "}
              <span className="highlight">Hardware Experience</span>
            </h1>

            <p className="hero-subtitle">
              Explore premium tools, durable materials, and modern equipment —
              all in one trusted hardware store. Built for professionals &
              homeowners.
            </p>

            <div className="button-group">
              <button className="btn btn-hero">Shop Now</button>
              <button className="btn btn-outline-hero">Explore More</button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src="hero1.png"
              alt="Hardware Tools"
              className="img-fluid hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
