import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "../../../components/navbar/components/Logout";
import style from "../styles/navbarDashboard.module.css";

const NavbarDashboard = () => {
  return (
    <div className={style.navbar}>
      <ul>
        <NavLink className={style.link} to={"/"}>
          Regresar
        </NavLink>
        <Logout />
      </ul>
      <h2 className={style.title}>panel de control</h2>
    </div>
  );
};

export default NavbarDashboard;
