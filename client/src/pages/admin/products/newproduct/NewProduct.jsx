import React, { useEffect } from "react";
import AdminLayout from "../../../../layouts/adminlayout/AdminLayout";
import { useCategory } from "../../../../context/CategoryContext";
import { useProduct } from "../../../../context/ProductContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./newproduct.css";
import { useState } from "react";

const NewProduct = () => {
  const { state, getAllCategories } = useCategory();
  const {
    state: {
      productField: {
        name,
        brandname,
        mrp,
        discount,
        sp,
        worv,

        manufacturingDate,
        expiryDate,
        vegornon,
        remark,
        description,
        rating,
      },
    },
    handleProductChange,
    handleProductSubmit,
  } = useProduct();

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <AdminLayout>
      <div className="container py-4">
        <div className="card shadow-sm border-0 rounded-4 new-product-card">
          <div className="card-header  text-center ">
            <h3 className="mb-0">🛒 Add New Kirana Product</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleProductSubmit} className="row g-3">
              {/* Category */}
              <div className="col-md-6">
                <label className="form-label fw-bold">Category</label>
                <select
                  name="catname"
                  onChange={handleProductChange}
                  className="form-select"
                  required
                >
                  <option value="">Select Category</option>
                  {state?.categories?.map((curEle) => (
                    <option key={curEle._id} value={curEle.name}>
                      {curEle.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Product Name */}
              <div className="col-md-6">
                <label className="form-label fw-bold">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={handleProductChange}
                  placeholder="e.g. Amul Butter, Tata Salt"
                  required
                />
              </div>

              {/* Brand */}
              <div className="col-md-6">
                <label className="form-label fw-bold">Brand</label>
                <input
                  type="text"
                  className="form-control"
                  name="brandname"
                  value={brandname}
                  onChange={handleProductChange}
                  placeholder="Amul, Tata, Parle"
                  required
                />
              </div>

              {/* MRP */}
              <div className="col-md-4">
                <label className="form-label fw-bold">MRP (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  name="mrp"
                  value={mrp}
                  onChange={handleProductChange}
                  placeholder="Maximum Retail Price"
                  required
                />
              </div>

              {/* Discount */}
              <div className="col-md-4">
                <label className="form-label fw-bold">Discount (%)</label>
                <input
                  type="number"
                  className="form-control"
                  name="discount"
                  value={discount}
                  onChange={handleProductChange}
                  placeholder="e.g. 5"
                />
              </div>

              {/* Selling Price */}
              <div className="col-md-4">
                <label className="form-label fw-bold">Selling Price (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  name="sp"
                  value={sp}
                  onChange={handleProductChange}
                  placeholder="Auto-calc from MRP - Discount"
                  disabled
                />
              </div>

              {/* Pack Size */}
              <div className="col-md-4">
                <label className="form-label fw-bold">Measurment/Units</label>
                <select
                  name="unit"
                  className="form-select"
                  onChange={handleProductChange}
                >
                  <option value="per/kg">per/kg</option>
                  <option value="per/gram">per/gram</option>
                  <option value="per/litre">per/Litre</option>
                  <option value="per/packet">per/packet</option>
                  <option value="per/dozen">per/dozen</option>
                </select>
              </div>

              {/* Packaging */}
              <div className="col-md-6">
                <label className="form-label fw-bold">Packaging Type</label>
                <select
                  name="packageType"
                  onChange={handleProductChange}
                  className="form-select"
                >
                  <option value="">Select Packaging</option>
                  <option value="Loose">Loose</option>
                  <option value="Packet">Packet</option>
                  <option value="Box">Box</option>
                  <option value="Bottle">Bottle</option>
                  <option value="Tin">Tin</option>
                  <option value="Jar">Jar</option>
                </select>
              </div>

              {/* Manufacture Date */}
              <div className="col-md-6">
                <label className="form-label fw-bold">Manufacture Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="manufacturingDate"
                  value={manufacturingDate}
                  onChange={handleProductChange}
                />
              </div>

              {/* Expiry Date */}
              <div className="col-md-6">
                <label className="form-label fw-bold">
                  Expiry / Best Before
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="expiryDate"
                  value={expiryDate}
                  onChange={handleProductChange}
                />
              </div>

              {/* Veg/Non-Veg */}
              <div className="col-md-6">
                <label className="form-label fw-bold">Veg / Non-Veg</label>
                <select
                  name="vegornon"
                  className="form-select"
                  value={vegornon}
                  onChange={handleProductChange}
                >
                  <option value="">Select</option>
                  <option value="veg">Vegetarian</option>
                  <option value="non-veg">Non-Vegetarian</option>
                </select>
              </div>

              {/* Storage Instructions */}
              <div className="col-12">
                <label className="form-label fw-bold">Remark</label>
                <textarea
                  className="form-control"
                  name="remark"
                  value={remark}
                  onChange={handleProductChange}
                  placeholder="e.g. Store in a cool & dry place"
                  rows="2"
                ></textarea>
              </div>

              {/* Description */}
              <div className="col-12">
                <label className="form-label fw-bold">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={handleProductChange}
                  placeholder="Detailed product description..."
                  rows="3"
                ></textarea>
              </div>

              {/* Rating */}
              <div className="col-md-6">
                <label className="form-label fw-bold">Rating</label>
                <input
                  type="number"
                  className="form-control"
                  name="rating"
                  value={rating}
                  onChange={handleProductChange}
                  placeholder="0 - 5"
                  min="0"
                  max="5"
                />
              </div>

              {/* Images */}
              <div className="col-12">
                <label className="form-label fw-bold">Upload Images</label>
                <input
                  type="file"
                  className="form-control"
                  name="photo"
                  // multiple
                  accept="image/*"
                  onChange={handleProductChange}
                />
              </div>

              {/* Submit */}
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-success px-5 mt-3">
                  ➕ Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default NewProduct;
