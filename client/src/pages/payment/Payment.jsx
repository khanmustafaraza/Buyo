import React, { useState } from "react";
import "./payment.css";
import MainLayout from "../../layouts/mainlayout/MainLayout";

const Payment = () => {
  const [activeTab, setActiveTab] = useState("card");
  const [cardData, setCardData] = useState({ number: "", expiry: "", cvv: "" });
  const [upiId, setUpiId] = useState("");

  const handleCardChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  const handlePayment = (method) => {
    alert(`Processing payment via ${method}...`);
    // Razorpay integration trigger here
  };

  return (
    <MainLayout>
      <section className="payment-section">
        <h2>Choose Payment Method</h2>

        {/* Tabs */}
        <div className="payment-tabs">
          <button
            className={activeTab === "card" ? "active" : ""}
            onClick={() => setActiveTab("card")}
          >
            💳 Card
          </button>
          <button
            className={activeTab === "upi" ? "active" : ""}
            onClick={() => setActiveTab("upi")}
          >
            🔗 UPI
          </button>
          <button
            className={activeTab === "wallet" ? "active" : ""}
            onClick={() => setActiveTab("wallet")}
          >
            🛍 Wallets
          </button>
          <button
            className={activeTab === "netbanking" ? "active" : ""}
            onClick={() => setActiveTab("netbanking")}
          >
            🏦 Net Banking
          </button>
        </div>

        {/* Card Payment Form */}
        {activeTab === "card" && (
          <div className="card-form">
            <label>Card Number</label>
            <input
              type="text"
              name="number"
              placeholder="xxxx xxxx xxxx xxxx"
              value={cardData.number}
              onChange={handleCardChange}
              maxLength={16}
            />
            <div className="card-row">
              <div>
                <label>Expiry</label>
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={cardData.expiry}
                  onChange={handleCardChange}
                  maxLength={5}
                />
              </div>
              <div>
                <label>CVV</label>
                <input
                  type="password"
                  name="cvv"
                  placeholder="•••"
                  value={cardData.cvv}
                  onChange={handleCardChange}
                  maxLength={3}
                />
              </div>
            </div>
            <button className="pay-btn" onClick={() => handlePayment("Card")}>
              Pay ₹12,999
            </button>
          </div>
        )}

        {/* UPI Section */}
        {activeTab === "upi" && (
          <div className="upi-section">
            <label>Enter UPI ID</label>
            <input
              type="text"
              placeholder="example@upi"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
            <button className="pay-btn" onClick={() => handlePayment("UPI")}>
              Pay via UPI
            </button>
          </div>
        )}

        {/* Wallet Section */}
        {activeTab === "wallet" && (
          <div className="wallet-section">
            <div
              className="wallet-btn google-pay"
              onClick={() => handlePayment("Google Pay")}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_Logo.svg"
                alt="Google Pay"
              />
              Pay with Google Pay
            </div>
            <div
              className="wallet-btn phone-pe"
              onClick={() => handlePayment("PhonePe")}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/PhonePe_Logo.svg"
                alt="PhonePe"
              />
              Pay with PhonePe
            </div>
          </div>
        )}

        {/* Net Banking */}
        {activeTab === "netbanking" && (
          <div className="netbanking-section">
            <label>Select Bank</label>
            <select>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>SBI</option>
              <option>Axis Bank</option>
              <option>Kotak Mahindra</option>
            </select>
            <button
              className="pay-btn"
              onClick={() => handlePayment("Net Banking")}
            >
              Pay via Net Banking
            </button>
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default Payment;
