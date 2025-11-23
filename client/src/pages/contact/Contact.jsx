import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div style={{ background: "#fff" }}>
        {/* --- Hero Section --- */}
        <div
          className="py-5 text-white text-center"
          style={{
            background: "rgb(255, 0, 149)",
          }}
        >
          <h1 className="fw-bold">Contact Us</h1>
          <p className="mt-2 fs-5">We are here to help you anytime</p>
        </div>

        {/* --- Contact Info + Form --- */}
        <div className="container my-5">
          <div className="row g-4">
            {/* --- Contact Info Box --- */}
            <div className="col-md-4">
              <div
                className="p-4 h-100 shadow-sm"
                style={{ borderLeft: "6px solid rgb(255,0,149)" }}
              >
                <h4
                  className="fw-bold mb-3"
                  style={{ color: "rgb(255,0,149)" }}
                >
                  Get in Touch
                </h4>

                <p>
                  <FaPhoneAlt className="me-2 text-success" /> +91 98765 43210
                </p>
                <p>
                  <FaEnvelope className="me-2 text-danger" />{" "}
                  support@ironshop.com
                </p>
                <p>
                  <FaMapMarkerAlt className="me-2 text-primary" /> Mumbai,
                  Maharashtra, India
                </p>

                <p className="mt-3">
                  Our support team will respond within 24 hours.
                </p>
              </div>
            </div>

            {/* --- Contact Form --- */}
            <div className="col-md-8">
              <div className="p-4 shadow-sm">
                <h4
                  className="fw-bold mb-3"
                  style={{ color: "rgb(255,0,149)" }}
                >
                  Send a Message
                </h4>

                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Write subject"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Enter your message..."
                      ></textarea>
                    </div>

                    <div className="col-12 text-end">
                      <button
                        className="btn px-4 py-2 text-white"
                        style={{
                          background: "rgb(255, 0, 149)",
                          fontWeight: "600",
                        }}
                      >
                        Send Message
                      </button>
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
