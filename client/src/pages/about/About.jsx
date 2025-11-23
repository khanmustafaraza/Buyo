import React from "react";
import "./about.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        {/* ---------------- HERO SECTION ---------------- */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>About IronHardware</h1>
            <p>Premium tools. Trusted quality. Delivered with passion.</p>
          </div>
        </section>

        {/* ----------------- STATS ----------------- */}
        <section className="stats-section">
          <div className="container stats-grid">
            <div className="stat-box">
              <h2>10K+</h2>
              <p>Happy Customers</p>
            </div>
            <div className="stat-box">
              <h2>1500+</h2>
              <p>Products Delivered</p>
            </div>
            <div className="stat-box">
              <h2>250+</h2>
              <p>Top Brands</p>
            </div>
            <div className="stat-box">
              <h2>12+</h2>
              <p>Years Experience</p>
            </div>
          </div>
        </section>

        {/* ---------------- OUR STORY ---------------- */}
        <section className="story-section">
          <div className="container story-wrapper">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                IronHardware began with a mission to bring professional-grade
                tools, hardware, and industrial supplies to every home and
                business in India. What started as a small workshop expanded
                into a nationwide platform trusted for quality, durability, and
                unmatched service.
              </p>
              <p>
                We believe the right tools can transform the way you build,
                create, fix, and innovate — and we are here to empower that
                journey.
              </p>
            </div>

            <div className="story-img">
              <img
                src="https://images.unsplash.com/photo-1581091012184-5c06a9880f5d"
                alt="IronHardware Story"
              />
            </div>
          </div>
        </section>

        {/* ---------------- WHY CHOOSE US ---------------- */}
        <section className="why-section">
          <h2>Why Choose IronHardware?</h2>

          <div className="why-grid container">
            <div className="why-card">
              <h3>Premium Quality</h3>
              <p>Every product is tested for durability and performance.</p>
            </div>
            <div className="why-card">
              <h3>Fast Delivery</h3>
              <p>Lightning-fast dispatch and trusted shipping partners.</p>
            </div>
            <div className="why-card">
              <h3>Trusted Brands</h3>
              <p>We partner only with certified and top-rated companies.</p>
            </div>
            <div className="why-card">
              <h3>Customer First</h3>
              <p>24/7 dedicated support to assist you anytime.</p>
            </div>
          </div>
        </section>

        {/* ---------------- TEAM SECTION ---------------- */}
        <section className="team-section">
          <h2>Meet Our Team</h2>

          <div className="container team-grid">
            <div className="team-card">
              <img
                src="https://randomuser.me/api/portraits/men/11.jpg"
                alt=""
              />
              <h4>Rohit Sharma</h4>
              <p>Founder & CEO</p>
            </div>

            <div className="team-card">
              <img
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt=""
              />
              <h4>Ananya Gupta</h4>
              <p>Operations Head</p>
            </div>

            <div className="team-card">
              <img
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt=""
              />
              <h4>Vikram Singh</h4>
              <p>Product Specialist</p>
            </div>
          </div>
        </section>

        {/* ---------------- CTA ---------------- */}
        <section className="cta-banner">
          <h2>Join Thousands of Happy Customers</h2>
          <p>
            Experience the quality that makes IronHardware India’s #1 tool
            store.
          </p>
          <button>Shop Now</button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
