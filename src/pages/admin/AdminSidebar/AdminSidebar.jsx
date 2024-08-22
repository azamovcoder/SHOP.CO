import "./AdminSidebar.scss";

import { NavLink, useNavigate } from "react-router-dom";
import React, { Fragment } from "react";

import { IoCreateOutline } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";
import { RiLogoutBoxLine } from "react-icons/ri";
import { logout } from "../../../context/slices/authSlices";
import { useDispatch } from "react-redux";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <Fragment>
      <div className="admin__sidebar">
        <h2>
          <NavLink to={"/"}>Admin Dashboard</NavLink>
        </h2>
        <ul className="admin__sidebar__list">
          <li className="admin__sidebar__list__item">
            <NavLink to={"create-product"}>
              <IoCreateOutline />
              <span>Create product</span>
            </NavLink>
          </li>
          <li className="admin__sidebar__list__item">
            <NavLink to={"manage-product"}>
              <LuSettings color="#fff" />
              <span>Manage product</span>
            </NavLink>
          </li>
          <li className="admin__sidebar__list__item">
            <NavLink to={"create-category"}>
              <IoCreateOutline />
              <span>Create Category</span>
            </NavLink>
          </li>
          <li className="admin__sidebar__list__item">
            <NavLink to={"manage-category"}>
              <LuSettings color="#fff" />
              <span>Manage Category</span>
            </NavLink>
          </li>
        </ul>
        <div onClick={handleLogOut} className="admin__sidebar__logout">
          <RiLogoutBoxLine />
          <span>Log out</span>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminSidebar;
