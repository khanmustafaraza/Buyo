import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-card">
          <h4 className="footer-brand">Buyo Store</h4>

          <p className="footer-text">
            Your trusted partner for premium hardware solutions and tools. We
            deliver high-quality products with excellent service.
          </p>
        </div>

        {/* Newsletter */}
        <div className="footer-card">
          <h5 className="footer-title">Join Our Newsletter</h5>
          <p className="footer-text small">
            Stay updated with our offers and new arrivals.
          </p>
          <div className="footer-newsletter">
            <input
              type="email"
              placeholder="Email Address"
              className="footer-input"
            />
            <button className="footer-btn">Subscribe</button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-card">
          <h5 className="footer-title">Quick Links</h5>
          <ul className="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div className="footer-card">
          <h5 className="footer-title">Connect With Us</h5>
          <div className="footer-social">
            <a href="#" className="footer-icon">
              <FaFacebook />
            </a>
            <a href="#" className="footer-icon">
              <FaTwitter />
            </a>
            <a href="#" className="footer-icon">
              <FaWhatsapp />
            </a>
            <a href="#" className="footer-icon">
              <FaInstagram />
            </a>
          </div>
          <div className="footer-contact">
            <FaEnvelope /> support@ekirana.com
          </div>
          <div className="footer-contact">
            <FaPhone /> +91 98765 43210
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        © {new Date().getFullYear()} Buyo Store. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
