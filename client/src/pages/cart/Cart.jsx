import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/mainlayout/MainLayout";
import { useCart } from "../../context/CartContext";
import "./cart.css";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { getCartData, cartItems, updateQty, removeItem } = useCart();

  useEffect(() => {
    getCartData();
  }, []);

  // Totals
  const totalMRP = cartItems.reduce(
    (sum, item) => sum + item.mrp * item.quantity,
    0
  );
  const discountOnMRP = cartItems.reduce(
    (sum, item) => sum + (item.mrp - item.sp) * item.quantity,
    0
  );
  const totalAmount = totalMRP - discountOnMRP;

  return (
    <MainLayout>
      <section className="cart-section myntra-cart">
        {/* LEFT: Items */}
        <div className="cart-left">
          {/* Delivery & Offers */}
          <div className="delivery-box">
            {/* <h4>Check delivery Address</h4> */}
            <NavLink to="/user-details">
              <button className="btn">ENTER ADDRESS AND PINCODE</button>
            </NavLink>
          </div>
          <div className="offers-box">
            <h4>Available Offers</h4>
            <p>
              10% Instant Discount on HDFC Bank Credit Card EMI & Debit Card EMI
              on min spend of ₹3,500.
            </p>
            <button className="link-btn">Show More</button>
          </div>
          <div className="stock-alert">⚠️ Item(s) out of stock.</div>

          {/* Cart Items */}
          <h3>{cartItems.length} ITEMS SELECTED</h3>
          {cartItems.map((item) => (
            <div className="cart-item" key={item._id}>
              <input type="checkbox" checked readOnly />
              {item?._id && (
                <img
                  src={`http://localhost:5000/api/photo/get-all-photo/${item._id}`}
                  alt="Product"
                  className="product-thumb"
                />
              )}
              <div className="cart-info">
                <h4>{item.name}</h4>
                <p className="seller">Sold by: {item.brandname}</p>
                <div className="cart-meta">
                  <span>Size: {item.unit}</span>
                  <span>
                    Qty:
                    {item?.quantity}
                    {/* <select
                      value={item.quantity}
                      onChange={(e) =>
                        updateQty(item._id, parseInt(e.target.value))
                      }
                    >
                      {[1, 2, 3, 4, 5].map((q) => (
                        <option key={q} value={q}>
                          {q}
                        </option>
                      ))}
                    </select> */}
                  </span>
                </div>

                <div className="cart-price">
                  <span className="discounted">₹{item.sp}</span>
                  <span className="mrp">₹{item.mrp}</span>
                  <span className="offer">{item.discount}% OFF</span>
                </div>
                <p className="return-policy">7 days return available</p>
              </div>

              <button className="remove" onClick={() => removeItem(item._id)}>
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT: Summary */}
        <div className="cart-right">
          {/* Coupons */}
          <div className="coupons">
            <h4>Apply Coupons</h4>
            <input type="text" placeholder="Enter Coupon" />
            <button className="btn">APPLY</button>
          </div>

          {/* Gift Option */}
          <div className="gift-box">
            <p>
              🎁 Buying for a loved one? <br />
              Gift packaging & personalised message for only ₹35.
            </p>
            <button className="btn">ADD GIFT PACKAGE</button>
          </div>

          {/* Donation */}
          <div className="donation-box">
            <h4>Donate and make a difference</h4>
            <div className="donation-options">
              {[10, 20, 50, 100].map((amt) => (
                <button key={amt} className="donate-btn">
                  ₹{amt}
                </button>
              ))}
            </div>
          </div>

          {/* Price Details */}
          <div className="price-details">
            <h4>PRICE DETAILS ({cartItems.length} Items)</h4>
            <p>
              Total MRP: <span>₹{totalMRP}</span>
            </p>
            <p>
              Discount on MRP: <span>-₹{discountOnMRP}</span>
            </p>
            <p>
              Coupon Discount: <span className="apply">Apply Coupon</span>
            </p>
            <p>
              Platform Fee: <span>₹20</span>
            </p>
            <p>
              Donation: <span>₹10</span>
            </p>
            <hr />
            <h3>Total Amount: ₹{totalAmount}</h3>
            <button className="place-order">PLACE ORDER</button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cart;
