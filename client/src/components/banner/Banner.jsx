import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <section className="offer-banner-img">
      <div className="overlay">
        <h2 className="banner-title">Big Deals on Iron Hardware Tools</h2>
        <p className="banner-subtitle">
          Up to <strong>30% OFF</strong> on Premium Quality Hardware
        </p>
        <button className="banner-btn">Explore More</button>
      </div>
    </section>
  );
};

export default Banner;
