import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-md-3">
            <h4 className="footer-brand">E KIRANA STORE</h4>
            <p className="footer-text">
              Your trusted partner for premium hardware solutions and tools. We
              deliver high-quality products with excellent service.
            </p>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h5 className="footer-title">Join Our Newsletter</h5>
            <p className="footer-text small">
              Stay updated with our offers and new arrivals.
            </p>

            <div className="footer-newsletter">
              <input
                type="email"
                className="footer-input"
                placeholder="Email Address"
              />
              <button className="footer-btn">Subscribe</button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
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
            </ul>
          </div>

          {/* Social + Contact */}
          <div className="col-md-3">
            <h5 className="footer-title">Connect With Us</h5>

            <div className="d-flex gap-3 mb-3">
              <a href="#" className="footer-icon">
                <FaFacebook />
              </a>
              <a href="#" className="footer-icon">
                <FaTwitter />
              </a>
              <a href="#" className="footer-icon">
                <FaWhatsapp />
              </a>
            </div>

            <p className="footer-contact">
              <FaEnvelope className="me-2" />
              support@uponline.com
            </p>

            <p className="footer-contact">
              <FaPhone className="me-2" />
              +91 98765 43210
            </p>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom */}
        <div className="text-center footer-bottom mt-3">
          © {new Date().getFullYear()} - {new Date().getFullYear() + 1} Up
          Online Hardware.
          <span className="fw-semibold"> All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
