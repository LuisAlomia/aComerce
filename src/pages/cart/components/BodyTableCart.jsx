import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../../redux/reducers/cart/cartSlice";
import style from "../styles/porcheseCard.module.css";
import bin from "../../../assets/svg/bin.svg";

const BodyTableCart = ({ item }) => {
  const [total, setTotal] = useState(parseInt(item.price));
  const dispatch = useDispatch();

  const increase = (price) => {
    setTotal(total + parseInt(price));
  };

  const diminish = (price) => {
    total > parseInt(price) && setTotal(total - parseInt(price));
  };

  const deleteItem = (id) => {
    dispatch(deleteCart(id));
  };

  return (
    <>
      <td className={`${style.column} ${style.rowCenter}`}>
        <span onClick={() => deleteItem(item._id)}>
          <img className={style.iconDelete} src={bin} alt="bin" />
        </span>
      </td>
      <td className={style.column}>
        <img
          className={style.porcheseImg}
          src={item.image1}
          alt={item.productname}
        />
      </td>
      <td className={style.column}>{item.productname}</td>
      <td className={style.column}>{item.price}</td>
      <td className={`${style.column} ${style.buttonCont}`}>
        <button onClick={() => increase(item.price)} className={style.button}>
          +
        </button>
        <button onClick={() => diminish(item.price)} className={style.button}>
          -
        </button>
      </td>
      <td className={style.column}>{total}</td>
    </>
  );
};

export default BodyTableCart;
