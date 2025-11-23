import React from "react";
import AdminLayout from "../../../layouts/adminlayout/AdminLayout";
import "./admindashboard.css";
import { FaUsers, FaBoxOpen, FaTags, FaShoppingCart } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="dashboard-container">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="dashboard-title">Welcome back, Admin 👋</h2>
          <p className="text-muted">Here’s a quick snapshot of your store</p>
        </div>

        {/* Summary Cards */}
        <div className="row g-4 mb-4">
          <div className="col-md-3 p-1">
            <div className="card stat-card border-start border-primary border-1 shadow-sm">
              <div className="card-body d-flex align-items-center">
                <div className="icon-box bg-primary bg-opacity-10 text-primary me-3">
                  <FaUsers />
                </div>
                <div>
                  <h6 className="text-muted mb-1">Users</h6>
                  <h4 className="mb-0">1,245</h4>
                  <small className="text-success">▲ 12% this month</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 p-1">
            <div className="card stat-card border-start border-success border-1 shadow-sm">
              <div className="card-body d-flex align-items-center">
                <div className="icon-box bg-success bg-opacity-10 text-success me-3">
                  <FaBoxOpen />
                </div>
                <div>
                  <h6 className="text-muted mb-1">Products</h6>
                  <h4 className="mb-0">324</h4>
                  <small className="text-success">▲ 8% this week</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 p-1">
            <div className="card stat-card border-start border-warning border-1 shadow-sm">
              <div className="card-body d-flex align-items-center">
                <div className="icon-box bg-warning bg-opacity-10 text-warning me-3">
                  <FaTags />
                </div>
                <div>
                  <h6 className="text-muted mb-1">Categories</h6>
                  <h4 className="mb-0">12</h4>
                  <small className="text-danger">▼ 2% this month</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 p-1">
            <div className="card stat-card border-start border-danger border-1 shadow-sm">
              <div className="card-body d-flex align-items-center">
                <div className="icon-box bg-danger bg-opacity-10 text-danger me-3">
                  <FaShoppingCart />
                </div>
                <div>
                  <h6 className="text-muted mb-1">Orders</h6>
                  <h4 className="mb-0">1,024</h4>
                  <small className="text-success">▲ 5% this week</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow-sm chart-card">
              <div className="card-header bg-transparent fw-bold">
                📊 Sales Overview
              </div>
              <div className="card-body text-center text-muted">
                (Chart placeholder)
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm chart-card">
              <div className="card-header bg-transparent fw-bold">
                📈 Revenue Growth
              </div>
              <div className="card-body text-center text-muted">
                (Chart placeholder)
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
