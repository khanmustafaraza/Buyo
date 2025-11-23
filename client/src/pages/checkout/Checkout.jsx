import React, { useState } from "react";
import "./checkout.css";
import MainLayout from "../../layouts/mainlayout/MainLayout";

const Checkout = () => {
  const [selectedAddress, setSelectedAddress] = useState(1);

  const addresses = [
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "9876543210",
      address: "123, MG Road, Bengaluru, 560001",
    },
    {
      id: 2,
      name: "Priya Mehta",
      phone: "9876501234",
      address: "45, Andheri East, Mumbai, 400069",
    },
  ];

  const cartItems = [
    { id: 1, name: "Apple iPhone 14 Pro", price: 119999, qty: 1 },
    { id: 2, name: "Samsung Galaxy S23 Ultra", price: 99999, qty: 2 },
  ];

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <MainLayout>
      <section className="checkout-section">
        {/* Left: Address Selection */}
        <div className="address-section">
          <h2>Select Delivery Address</h2>
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className={`address-card ${
                selectedAddress === addr.id ? "selected" : ""
              }`}
              onClick={() => setSelectedAddress(addr.id)}
            >
              <h4>
                {addr.name} <span>({addr.phone})</span>
              </h4>
              <p>{addr.address}</p>
            </div>
          ))}
          <button className="add-address-btn">+ Add New Address</button>
        </div>

        {/* Right: Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-items">
            {cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <span>
                  {item.name} (x{item.qty})
                </span>
                <span>₹{(item.price * item.qty).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <hr />
          <p className="total">Total: ₹{totalPrice.toLocaleString()}</p>
          <button className="payment-btn">Proceed to Payment</button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Checkout;
