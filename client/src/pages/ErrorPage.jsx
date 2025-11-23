import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center px-3">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3 fw-semibold text-dark">Oops! Page Not Found</h2>
      <p className="text-muted mb-4">
        The page you’re looking for doesn’t exist or might have been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="btn btn-danger px-4 py-2 shadow-sm"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
