import React from "react";

import MainLayout from "../../layouts/mainlayout/MainLayout";
import Hero from "../../components/hero/Hero";
import Featured from "../../components/featured/Featured";
import Testimonials from "../../components/testimomials/Testimonials";
import Category from "../../components/category/Category";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <>
      <MainLayout>
        <div className="container">
          <Hero />
          <Category />
          <Featured />
          <Banner />
          <Testimonials />
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
