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
    <section className="category-section">
      <div className="category-header container">
        <h2>Shop by Category</h2>
        <p>Find the best tools, accessories and products curated for you.</p>
      </div>

      <div className="cat-flex">
        {state?.categories?.map((cat) => (
          <NavLink
            to={`/category-product-filter/${cat?.name}`}
            key={cat._id}
            className="category-card"
          >
            <div className="category-img-box">
              <img src={`data:image/jpeg;base64,${cat.photo}`} alt={cat.name} />
            </div>
            <h4 className="category-label">{cat.name}</h4>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Category;
