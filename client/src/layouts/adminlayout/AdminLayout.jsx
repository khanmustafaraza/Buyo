import React from "react";
import TopBar from "../../components/topbar/TopBar";
import LeftBar from "../../components/leftbar/LeftBar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <LeftBar />
          <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-6 col-sm-6 col-6">
            <TopBar />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
