import React from "react";
import { ColorRing } from "react-loader-spinner";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <ColorRing
        visible={true}
        height="60"
        width="60"
        // ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={[
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
        ]}
      />
    </div>
  );
};

export default Loader;
