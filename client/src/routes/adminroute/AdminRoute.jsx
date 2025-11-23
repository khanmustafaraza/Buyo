import React from "react";
import { Outlet } from "react-router-dom";

const AdminRoute = () => {
  const token = true;
  return token ? <Outlet></Outlet> : null;
};

export default AdminRoute;
