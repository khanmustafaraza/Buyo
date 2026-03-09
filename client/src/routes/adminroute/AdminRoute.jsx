import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const AdminRoute = () => {
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const { state } = useAuth();

  const adminAuthFunction = async () => {
    if (!state?.token) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${VITE_API_URL}/api/admin/admin-auth`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });

      const data = await res.json();

      if (data.success && data.isAdmin) {
        setOk(true);
      } else {
        setOk(false);
      }
    } catch (error) {
      console.error(error);
      setOk(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    adminAuthFunction();
  }, [state?.token, location]);

  if (loading) return <h3>Loading...</h3>;

  return ok ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;
