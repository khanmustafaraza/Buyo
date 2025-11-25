import React, { useEffect } from "react";
import "./cart.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { carts, getAllCartItems, increaseQty, decreaseQty, removeItem } =
    useCart();

  useEffect(() => {
    getAllCartItems();
  }, []);

  const totalAmount = carts.reduce(
    (acc, item) => acc + item.product.sp * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="cart-wrapper">
        {/* Deliver Address */}
        <div className="address-box">
          <h4>Deliver to:</h4>
          <p className="user-address">Mustafa Raza Khan, Mumbai - 400001</p>
          <button className="change-btn">Change</button>
        </div>

        <div className="cart-container">
          {/* LEFT SIDE */}
          <div className="cart-left">
            {carts.map((item) => (
              <div key={item._id} className="cart-item">
                {/* Product Image */}
                <img
                  src={`http://localhost:5000/api/photo/get-all-photo/${item.product._id}`}
                  alt={item.product.name}
                  className="item-img"
                />

                {/* Product Details */}
                <div className="item-info">
                  <h3 className="item-title">{item.product.name}</h3>

                  <p className="brand">Brand: {item.product.brandname}</p>
                  <p className="category">Category: {item.product.catname}</p>

                  <p className="item-price">
                    <span className="sp">₹ {item.product.sp}</span>
                    <span className="mrp">₹ {item.product.mrp}</span>
                    <span className="discount">
                      {item.product.discount}% OFF
                    </span>
                  </p>

                  <p className="description">{item.product.description}</p>

                  <div className="extra-details">
                    <span>Unit: {item.product.unit}</span>
                    <span>Package: {item.product.packageType}</span>
                    <span className={`veg-tag ${item.product.vegornon}`}>
                      {item.product.vegornon}
                    </span>
                  </div>

                  <div className="date-row">
                    <span>
                      Mfg: {item.product.manufacturingDate?.slice(0, 10)}
                    </span>
                    <span>Exp: {item.product.expiryDate?.slice(0, 10)}</span>
                  </div>

                  <p className="remark">
                    <strong>Remark:</strong> {item.product.remark}
                  </p>

                  {/* Quantity Controls */}
                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item._id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item._id)}>+</button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE – PRICE SUMMARY */}
          <div className="cart-right">
            <div className="price-box">
              <h4>PRICE DETAILS</h4>
              <hr />

              <div className="price-row">
                <span>Price ({carts.length} items)</span>
                <span>₹ {totalAmount}</span>
              </div>

              <div className="price-row">
                <span>Discount</span>
                <span className="green">− ₹ 200</span>
              </div>

              <div className="price-row">
                <span>Delivery Charges</span>
                <span className="green">FREE</span>
              </div>

              <hr />

              <div className="price-row total">
                <strong>Total Amount</strong>
                <strong>₹ {totalAmount - 200}</strong>
              </div>

              <button className="place-btn">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
