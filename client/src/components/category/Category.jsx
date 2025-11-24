import React from "react";
import "./category.css";
import { useCategory } from "../../context/CategoryContext";
import { useEffect } from "react";

const Category = () => {
  const { state, getAllCategories } = useCategory();
 
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <section className="category-section container py-5">
      <h2 className="section-title">Shop by Category</h2>
      <div className="cat-container row g-4 mt-3">
        {state.categories &&
          state?.categories?.map((cat, index) => (
            <div className="col-6 col-md-4 col-lg-2" key={index}>
              <div className="category-card text-center">
                <img
                  src={`data:image/jpeg;base64,${cat.photo}`}
                  className="category-img"
                  alt={cat.name}
                />
                <h5 className="mt-2 text-capitalize">{cat.name}</h5>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Category;
