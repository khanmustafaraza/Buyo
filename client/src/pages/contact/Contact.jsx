import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        {/* --- Hero Section --- */}
        <div className="contact-hero">
          <h1>Contact Us</h1>
          <p>We are here to assist you with excellence.</p>
        </div>

        {/* --- Contact Section --- */}
        <div className="container contact-container">
          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-md-4">
              <div className="contact-info-box">
                <h4>Get in Touch</h4>

                <p>
                  <FaPhoneAlt /> +91 98765 43210
                </p>
                <p>
                  <FaEnvelope /> support@ironshop.com
                </p>
                <p>
                  <FaMapMarkerAlt /> Mumbai, Maharashtra, India
                </p>

                <span className="response-note">
                  Our team responds within 24 hours.
                </span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-8">
              <div className="contact-form-box">
                <h4>Send a Message</h4>

                <form>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <input type="text" placeholder="Full Name" />
                    </div>

                    <div className="col-md-6">
                      <input type="email" placeholder="Email Address" />
                    </div>

                    <div className="col-md-6">
                      <input type="text" placeholder="Phone Number" />
                    </div>

                    <div className="col-md-6">
                      <input type="text" placeholder="Subject" />
                    </div>

                    <div className="col-12">
                      <textarea rows="5" placeholder="Your Message"></textarea>
                    </div>

                    <div className="col-12 text-end">
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
