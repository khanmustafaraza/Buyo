import React from "react";
import AdminLayout from "../../../../layouts/adminlayout/AdminLayout";
import "./newcategory.css";
import { useCategory } from "../../../../context/CategoryContext";

const NewCategory = () => {
  // todo  useCategroy assign
  const {
    state: {
      categoryField: { name, photo },
    },
    handleCategoryChange,
    handleCategorySubmit,
  } = useCategory();
  // console.log(name)

  return (
    <AdminLayout>
      <div className="new-category-container">
        <h2>Add New Category</h2>
        <form className="category-form" onSubmit={handleCategorySubmit}>
          <div className="form-group">
            <label>Category Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter category name"
              required
              autoComplete="off"
              value={name}
              onChange={handleCategoryChange}
            />
          </div>
          <div className="form-group">
            <label>Category Photo</label>
            <input type="file" name="photo" onChange={handleCategoryChange} />
          </div>

          <button type="submit" className="btn-submit">
            Add Category
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default NewCategory;
