import React from "react";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaTags,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./leftbar.css";

const menuItems = [
  {
    icon: <span className="material-symbols-outlined">bar_chart</span>,
    label: "Dashboard",
    path: "/admin/admin-dashboard",
  },
  {
    icon: <span className="material-symbols-outlined">category_search</span>,
    label: "Add Category",
    path: "/admin/create-new-category",
  },
  {
    icon: <span className="material-symbols-outlined">add_notes</span>,
    label: "Category List",
    path: "/admin/category-list",
  },
  {
    icon: <span className="material-symbols-outlined">apparel</span>,
    label: "Add Product",
    path: "/admin/create-new-product",
  },
  {
    icon: <span className="material-symbols-outlined">list_alt_add</span>,
    label: "Product List",
    path: "/admin/product-list",
  },
  {
    icon: <span className="material-symbols-outlined">shopping_bag</span>,
    label: "Cart",
    path: "/admin/product-list",
  },
  {
    icon: <span className="material-symbols-outlined">orders</span>,
    label: "Orders",
    path: "/admin/product-list",
  },
  {
    icon: (
      <span className="material-symbols-outlined">currency_rupee_circle</span>
    ),
    label: "Payments",
    path: "/admin/product-list",
  },

  {
    icon: <span className="material-symbols-outlined">group</span>,
    label: "Users",
    path: "/admin/users",
  },
  {
    icon: <span className="material-symbols-outlined">approval</span>,
    label: "Address",
    path: "/admin/users",
  },
  {
    icon: <span className="material-symbols-outlined">heart_plus</span>,
    label: "Wishlist",
    path: "/admin/users",
  },
  {
    icon: <span className="material-symbols-outlined">settings</span>,
    label: "Settings",
    path: "/admin/settings",
  },
  {
    icon: (
      <span className="material-symbols-outlined bg-success p-1 rounded-1">
        exit_to_app
      </span>
    ),
    label: "LOGOUT",
    path: "/admin/settings",
  },
];

const LeftBar = () => {
  return (
    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 leftbar">
      <div className="sidebar-logo d-flex justify-content-around rounded-1 align-items-center">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/000/587/678/small_2x/lletter-05-01.jpg"
          alt="brand-logo"
          style={{ width: "30px", height: "30px" }}
        />
        <div>E-Shop</div>
      </div>
      <hr className="hr" />

      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `menu-item ${isActive ? "active" : ""}`
              }
            >
              <span className="icon">{item.icon}</span>
              <span className="label none">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <h6 className="font-monospace pt-2">Toggle Dashboard</h6>
      <div className="toggle-container d-flex justify-content-evenly mt-4">
        <div
          className="d-flex justify-content-center align-items-center bg-dark text-white"
          style={{
            width: "30px",
            height: "30px",
            border: "1px solid black",
            borderRadius: "4px",
          }}
        >
          <FaMoon />
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "30px",
            height: "30px",
            border: "1px solid black",
            borderRadius: "4px",
          }}
        >
          <FaSun></FaSun>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
