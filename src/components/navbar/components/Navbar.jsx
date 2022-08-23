import { NavLink } from "react-router-dom";
import { useLocalStorage } from "../../../hooks/useLocalStorege";
import { useEffect, useState } from "react";
import Logout from "./Logout";
import userCircle from "../../../assets/svg/user-circle-o.svg";
import cartImg from "../../../assets/svg/cart.svg";
import menu from "../../../assets/svg/menu.svg";
import style from "../styles/navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState(false);
  const [token] = useLocalStorage("token", undefined);
  const [amount, setAmount] = useState(0);
  const cart = useSelector((state) => state.cart);

  const handdleMenu = () => {
    setMenuHidden(!menuHidden);
  };

  useEffect(() => {
    setAmount(cart.length);
  }, [cart]);

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.contentNavbar}>
          <ul className={style.content}>
            <NavLink className={style.link} to={"/"}>
              Inicio
            </NavLink>
            <NavLink className={style.link} to={"/shoes/men"}>
              Hombres
            </NavLink>
            <NavLink className={style.link} to={"/shoes/women"}>
              Mujeres
            </NavLink>
          </ul>
          <ul className={style.content}>
            {token ? (
              <>
                {token.role[0] === "admin" ? (
                  <>
                    <NavLink
                      className={`${style.buttons} ${style.outline}`}
                      to={"/dashboard"}
                    >
                      Panel de Control
                    </NavLink>
                    <Logout />
                    <NavLink className={style.buttonUser} to={"/purchase"}>
                      <img src={cartImg} alt="cart ico" />
                      <span className={style.amount}>{amount}</span>
                    </NavLink>
                    <NavLink className={style.buttonUser} to={"/user/purchase"}>
                      {token?.username}
                      <img src={userCircle} alt="user circle ico" />
                    </NavLink>
                  </>
                ) : (
                  <>
                    <Logout />
                    <NavLink className={style.buttonUser} to={"/purchase"}>
                      <img src={cartImg} alt="cart ico" />
                      <span className={style.amount}>{amount}</span>
                    </NavLink>
                    <NavLink className={style.buttonUser} to={"/user/purchase"}>
                      {token?.username}
                      <img src={userCircle} alt="user circle ico" />
                    </NavLink>
                  </>
                )}
              </>
            ) : (
              <>
                <NavLink
                  className={`${style.buttons} ${style.full}`}
                  to={"/login"}
                >
                  Iniciar Sesión
                </NavLink>
                <NavLink
                  className={`${style.buttons} ${style.outline}`}
                  to={"/register"}
                >
                  registrarse
                </NavLink>
              </>
            )}
          </ul>
        </div>
        {/* Menu MOVIL */}
        <span className={style.menu}>
          <img
            onClick={handdleMenu}
            className={style.menuIcon}
            src={menu}
            alt="menu"
          />
          {token && (
            <ul className={style.content}>
              <NavLink className={style.buttonUser} to={"/purchase"}>
                <img src={cartImg} alt="cart ico" />
                <span className={style.amount}>{amount}</span>
              </NavLink>
              <NavLink className={style.buttonUser} to={"/user/purchase"}>
                {token.username}
                <img src={userCircle} alt="user circle ico" />
              </NavLink>
            </ul>
          )}
        </span>
      </nav>
      {/* Menu MOVIL */}
      {menuHidden === true && (
        <div className={`${style.dropdwnMenu}`}>
          <ul className={style.menuContentButton}>
            <NavLink className={style.link} to={"/"}>
              Inicio
            </NavLink>
            <NavLink className={style.link} to={"/shoes/men"}>
              Hombres
            </NavLink>
            <NavLink className={style.link} to={"/shoes/women"}>
              Mujeres
            </NavLink>
          </ul>
          <ul className={style.menuContentButton}>
            {token ? (
              <>
                {token.role[0] === "admin" ? (
                  <>
                    <NavLink
                      className={`${style.buttons} ${style.outline}`}
                      to={"/dashboard"}
                    >
                      Panel de Control
                    </NavLink>
                    <Logout />
                  </>
                ) : (
                  <>
                    <Logout />
                  </>
                )}
              </>
            ) : (
              <>
                <NavLink
                  className={`${style.buttons} ${style.full}`}
                  to={"/login"}
                >
                  Iniciar Sesión
                </NavLink>
                <NavLink
                  className={`${style.buttons} ${style.outline}`}
                  to={"/register"}
                >
                  registrarse
                </NavLink>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
