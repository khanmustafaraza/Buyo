import React, { useEffect } from "react";
import "./category.css";
import { useCategory } from "../../context/CategoryContext";
import { NavLink } from "react-router-dom";

const Category = () => {
  const { state, getAllCategories } = useCategory();

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <section className="category-section container py-5">
      <h2 className="section-title">Shop by Category</h2>

      <div className="cat-container">
        {state.categories &&
          state.categories.map((cat) => (
            <NavLink
              to={`/category-product-filter/${cat?.name}`}
              key={cat._id}
              className="category-link"
            >
              <div className="category-card">
                <div className="img-wrapper">
                  <img
                    src={`data:image/jpeg;base64,${cat.photo}`}
                    alt={cat.name}
                    className="category-img"
                  />
                </div>
                <h5 className="category-name text-capitalize">{cat.name}</h5>
              </div>
            </NavLink>
          ))}
      </div>
    </section>
  );
};

export default Category;
