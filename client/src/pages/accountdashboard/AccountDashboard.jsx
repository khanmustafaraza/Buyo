import React, { useState } from "react";
import "./accountdashboard.css";
import MainLayout from "../../layouts/mainlayout/MainLayout";

const AccountDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <MainLayout>
      <section className="account-dashboard">
        {/* Sidebar Menu */}
        <aside className="dashboard-sidebar">
          <h3>My Account</h3>
          <ul>
            <li
              className={activeTab === "profile" ? "active" : ""}
              onClick={() => setActiveTab("profile")}
            >
              👤 Profile
            </li>
            <li
              className={activeTab === "orders" ? "active" : ""}
              onClick={() => setActiveTab("orders")}
            >
              📦 Orders
            </li>
            <li
              className={activeTab === "addresses" ? "active" : ""}
              onClick={() => setActiveTab("addresses")}
            >
              🏠 Addresses
            </li>
            <li
              className={activeTab === "settings" ? "active" : ""}
              onClick={() => setActiveTab("settings")}
            >
              ⚙️ Settings
            </li>
          </ul>
        </aside>

        {/* Main Content Area */}
        <div className="dashboard-content">
          {activeTab === "profile" && (
            <div className="profile-section">
              <h2>My Profile</h2>
              <div className="profile-card">
                <img src="https://i.pravatar.cc/120" alt="User" />
                <div>
                  <h3>Rahul Sharma</h3>
                  <p>Email: rahul@example.com</p>
                  <p>Phone: +91 9876543210</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="orders-section">
              <h2>My Orders</h2>
              <div className="order-card">
                <h4>Order #12345</h4>
                <p>Product: Apple iPhone 14 Pro</p>
                <p>
                  Status: <span className="delivered">Delivered</span>
                </p>
                <p>Date: 28 July 2025</p>
              </div>
              <div className="order-card">
                <h4>Order #12346</h4>
                <p>Product: Samsung Galaxy S23 Ultra</p>
                <p>
                  Status: <span className="shipped">Shipped</span>
                </p>
                <p>Date: 1 Aug 2025</p>
              </div>
            </div>
          )}

          {activeTab === "addresses" && (
            <div className="addresses-section">
              <h2>Saved Addresses</h2>
              <div className="address-card">
                <p>Rahul Sharma</p>
                <p>123, MG Road, Bengaluru, 560001</p>
                <p>Phone: 9876543210</p>
                <button>Edit</button>
                <button className="delete">Delete</button>
              </div>
              <button className="add-address">+ Add New Address</button>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="settings-section">
              <h2>Settings</h2>
              <button className="logout-btn">🚪 Logout</button>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default AccountDashboard;
