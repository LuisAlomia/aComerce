import { useLocalStorage } from "../../../hooks/useLocalStorege";
import { useDispatch } from "react-redux";
import { setCart } from "../../../redux/reducers/cart/cartSlice";
import { useState } from "react";
import cart from "../../../assets/svg/cart.svg";
import style from "../styles/addCart.module.css";

const AddCart = ({ item }) => {
  const [token] = useLocalStorage("token", "");
  const [session, setSession] = useState(false);
  const dispatch = useDispatch();

  const handdlePorchase = () => {
    token !== "" && dispatch(setCart(item));
    setSession(true);
    setTimeout(() => setSession(false), 2000);
  };

  return (
    <div className={style.content}>
      <div onClick={handdlePorchase} className={style.contentCart}>
        <img className={style.imgCart} src={cart} alt="item product" />
      </div>
      {token === "" && session === true && (
        <p className={style.sesion}>Debes iniciar sesíon</p>
      )}
    </div>
  );
};

export default AddCart;
