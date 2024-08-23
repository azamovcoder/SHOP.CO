import "./Admin.scss";

import AdminSidebar from "./AdminSidebar/AdminSidebar";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useGetProfileQuery } from "../../context/api/adminApi";

const Admin = () => {
  const { data } = useGetProfileQuery();
  return (
    <Fragment>
      <div className="admin">
        <AdminSidebar />
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Admin;
