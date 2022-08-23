import { useDispatch } from "react-redux";
import { resetCart } from "../../../redux/reducers/cart/cartSlice";
import { postPurchase } from "../../../services/catrsServices";
import style from "../styles/porchase.module.css";

const Porchese = ({ cart, newToken }) => {
  const dispatch = useDispatch();
  const { username, token } = newToken;

  const carts = { carts: [{ username, cart }] };

  const porchase = () => {
    postPurchase(carts, token)
      .then((resp) => {
        dispatch(resetCart());
      })
      .catch((err) => console.log(err));
  };

  return (
    <button onClick={porchase} className={style.buttonBuy}>
      Porchese
    </button>
  );
};

export default Porchese;
