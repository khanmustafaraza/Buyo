import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container-fluid">
        <div className="row mt-1">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
