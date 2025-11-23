import React, { useEffect } from "react";
import AdminLayout from "../../../../layouts/adminlayout/AdminLayout";
import "./categorylist.css";
import { useCategory } from "../../../../context/CategoryContext";
import Loader from "../../../../components/loader/Loader";

const CategoryList = () => {
  const { state, getAllCategories, handleCategoryDelete } = useCategory();
  useEffect(() => {
    getAllCategories();
  }, [state.isDelete]);

  return (
    <AdminLayout>
      <div className="category-list-container">
        <h2>Category List</h2>
        {state && state.isLoading && state.isLoading ? <Loader /> : null}

        <div className="category-table">
          <div className="table-header">
            <div className="table-cell">#</div>
            <div className="table-cell">Category Name</div>
            <div className="table-cell">Image</div>
            <div className="table-cell">Actions</div>
          </div>

          {state.categories &&
            state.categories.map((curEl, index) => {
              return (
                <div className="table-row" key={index}>
                  <div className="table-cell">{index + 1}</div>
                  <div className="table-cell text-capitalize">{curEl.name}</div>
                  <div className="">
                    <div className="w-full">
                      <img
                        src={`data:image/jpeg;base64,${curEl.photo}`}
                        alt=""
                        style={{
                          maxWidth: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>
                  <div className="table-cell actions">
                    <button
                      className="btn-delete"
                      onClick={() => handleCategoryDelete(curEl._id)}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </AdminLayout>
  );
};

export default CategoryList;
