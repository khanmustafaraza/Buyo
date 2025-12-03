import React from "react";
import "./hero.css";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container container">
        {/* Left Section */}
        <div className="hero-content">
          <h1>
            Upgrade Your <span className="glow-text">Shopping Experience</span>
          </h1>

          <p>
            Premium tools engineered for durability and efficiency — trusted by
            professionals, builders, and creators. Quality isn’t a feature, it's
            a standard.
          </p>

          <div className="hero-buttons">
            <NavLink to="/products">
              <button className="primary-btn">Shop Now</button>
            </NavLink>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img src="hero1.png" alt="Hardware Tools" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
