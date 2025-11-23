import React, { useEffect } from "react";
import "./productlist.css";
import {
  FaEdit,
  FaTrashAlt,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import AdminLayout from "../../../../layouts/adminlayout/AdminLayout";
import { useProduct } from "../../../../context/ProductContext";

const ProductList = () => {
  const { state, getAllProducts } = useProduct();

  // ⭐ Render stars horizontally
  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;

    for (let i = 1; i <= maxStars; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="star filled" />);
      } else if (i === Math.floor(rating) + 1 && rating % 1 >= 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="star half" />);
      } else {
        stars.push(<FaRegStar key={i} className="star empty" />);
      }
    }
    return stars;
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleEdit = (id) => {
    console.log("Edit product:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete product:", id);
  };

  return (
    <AdminLayout>
      <div className="product-list-container">
        <h2>📦 Product List</h2>

        {/* ✅ keep overflow for horizontal scroll */}
        <div className="table-wrapper">
          <table className="product-table">
            <thead>
              <tr>
                <th>Img</th>
                <th>Name</th>
                <th>Cat</th>
                <th>Brand</th>
                <th>MRP</th>
                <th>Discount%</th>

                <th>SP</th>

                <th>Unit</th>
                <th>PackedType</th>

                <th>MFG</th>
                <th>EXP</th>
                <th>Veg</th>
                <th>Remark</th>
                <th>Desc</th>
                <th>Rate</th>
                <th>Act</th>
              </tr>
            </thead>

            <tbody>
              {state?.allProducts && state?.allProducts.length > 0 ? (
                state.allProducts.map((product) => (
                  <tr key={product._id}>
                    {/* ✅ Product Image */}
                    <td>
                      <img
                        src={`http://localhost:5000/api/photo/get-all-photo/${product._id}`}
                        alt="Product"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      />
                    </td>

                    <td>{product.name}</td>
                    <td>{product.catname}</td>
                    <td>{product.brandname}</td>

                    <td>{product.mrp}</td>
                    <td>{product.discount}%</td>
                    <td>{product.sp}</td>

                    <td>{product.unit}</td>
                    <td>{product.packageType}</td>

                    <td>
                      {new Date(product.manufacturingDate).toLocaleString()}
                    </td>
                    <td>{new Date(product.expiryDate).toLocaleString()}</td>

                    <td>{product.vegornon}</td>
                    <td>{product.remark}</td>
                    <td>{product.description}</td>

                    <td>
                      <div className="rating-inline">
                        {renderStars(product.rating)}
                        <span className="rating-number">{product.rating}</span>
                      </div>
                    </td>

                    <td className="actions">
                      <button className="edit-btn">
                        <FaEdit />
                      </button>
                      <button className="delete-btn">
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="16" className="no-products">
                    🚫 No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ProductList;
