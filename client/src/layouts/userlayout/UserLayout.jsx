import React from "react";
import TopBar from "../../components/topbar/TopBar";
import LeftBar from "../../components/leftbar/LeftBar";

const UserLayout = ({ children }) => {
  const menuItems = [
  {
    icon: <span className="material-symbols-outlined">bar_chart</span>,
    label: "Dashboard",
    path: "/admin/admin-dashboard",
  },
//   {
//     icon: <span className="material-symbols-outlined">category_search</span>,
//     label: "Add Category",
//     path: "/admin/create-new-category",
//   },
//   {
//     icon: <span className="material-symbols-outlined">add_notes</span>,
//     label: "Category List",
//     path: "/admin/category-list",
//   },
//   {
//     icon: <span className="material-symbols-outlined">apparel</span>,
//     label: "Add Product",
//     path: "/admin/create-new-product",
//   },
//   {
//     icon: <span className="material-symbols-outlined">list_alt_add</span>,
//     label: "Product List",
//     path: "/admin/product-list",
//   },
//   {
//     icon: <span className="material-symbols-outlined">shopping_bag</span>,
//     label: "Cart",
//     path: "/admin/product-list",
//   },
  {
    icon: <span className="material-symbols-outlined">orders</span>,
    label: "Orders",
    path: "/admin/product-list",
  },
//   {
//     icon: (
//       <span className="material-symbols-outlined">currency_rupee_circle</span>
//     ),
//     label: "Payments",
//     path: "/admin/product-list",
//   },

//   {
//     icon: <span className="material-symbols-outlined">group</span>,
//     label: "Users",
//     path: "/admin/users",
//   },
  {
    icon: <span className="material-symbols-outlined">approval</span>,
    label: "Address",
    path: "/admin/users",
  },
//   {
//     icon: <span className="material-symbols-outlined">heart_plus</span>,
//     label: "Wishlist",
//     path: "/admin/users",
//   },
  {
    icon: <span className="material-symbols-outlined">settings</span>,
    label: "Settings",
    path: "/admin/settings",
  },
  {
    icon: (
      <span className="material-symbols-outlined bg-success p-1 rounded-1">
        exit_to_app
      </span>
    ),
    label: "LOGOUT",
    path: "/admin/settings",
  },
];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <LeftBar menuItems={menuItems} isAdmin={false} />
          <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-6 col-sm-6 col-6">
          
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
