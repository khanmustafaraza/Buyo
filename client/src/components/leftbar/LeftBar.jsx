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



const LeftBar = ({menuItems,isAdmin}) => {
  return (
    <div className={`${isAdmin?"col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 leftbar":"col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6"}`}>
     {
      isAdmin&& <>
       <div className="sidebar-logo d-flex justify-content-around rounded-1 align-items-center">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/000/587/678/small_2x/lletter-05-01.jpg"
          alt="brand-logo"
          style={{ width: "30px", height: "30px" }}
        />
        <div>E-Shop</div>
      </div>
      <hr className="hr" />
      </>
     }

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
     {
      isAdmin && <>
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
      </>
     }
    </div>
  );
};

export default LeftBar;
