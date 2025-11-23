import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

import { useLocation } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import { useCart } from "../../context/CartContext";
import "./Single.css";
// import { useProduct } from "../../Context/ProductContext";

const Single = () => {
  const id = useLocation().pathname.split("/")[2];
  const { getSingleProduct, state, isLoading } = useProduct();
  const { handleCartItem } = useCart();
  const { singleProduct } = state;
  useEffect(() => {
    getSingleProduct(id);
  }, []);

  // handle image
  const [image, setImage] = useState(
    isLoading
      ? "good"
      : singleProduct &&
          singleProduct?.images &&
          singleProduct?.images &&
          singleProduct?.images[0]
  );
  const handleImage = (e) => {
    setImage(e.target.src);
  };
  return (
    <>
      {/* <Navbar /> */}

      <div className="container">
        {isLoading ? (
          <h1>Loading....</h1>
        ) : (
          <div className="row p-2">
            <div className="col-lg-5 col-md-5 col-sm-5 col p-2  p-3">
              <div className=" row single-product-logo  d-flex align-items-center">
                <div className="col-lg-6">
                  <img src={image} style={{ width: "230px" }} alt="" />
                </div>
                <div className="col-lg-6">
                  {singleProduct &&
                    singleProduct.images &&
                    singleProduct?.images.map((curEle) => {
                      return (
                        <img
                          src={curEle}
                          alt="productlogo"
                          className="single-img"
                          onClick={(e) => handleImage(e)}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-7 col py-5 px-2">
              <div className="product-content ">
                <div>
                  <h3>{singleProduct?.title}</h3>
                </div>
                <div>
                  <p>Rs {singleProduct?.price}/-</p>
                </div>
                <div className="description">
                  <p className="text-wrap">{singleProduct?.desc}</p>
                </div>

                <div className="single-btn w-25">
                  <Btn
                    handleSubmit={() => handleCartItem(singleProduct, image)}
                    name="Add To Cart"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Foooter />
    </>
  );
};

export default Single;
