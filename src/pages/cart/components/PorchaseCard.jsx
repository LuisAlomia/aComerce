import { useSelector } from "react-redux";
import { useLocalStorage } from "../../../hooks/useLocalStorege";
import style from "../styles/porcheseCard.module.css";
import BodyTableCart from "./BodyTableCart";
import Porchese from "./Porchese";

const PorchaseCard = () => {
  const cart = useSelector((state) => state.cart);
  const [newToken] = useLocalStorage("token", "");

  return (
    <div className={style.content}>
      {cart.length > 0 ? (
        <table className={style.table}>
          <thead>
            <tr className={style.row}>
              <th className={style.column}></th>
              <th className={style.column}></th>
              <th className={style.column}>Nombre</th>
              <th className={style.column}>Precio</th>
              <th className={style.column}></th>
              <th className={style.column}>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item._id}>
                <BodyTableCart item={item} />
              </tr>
            ))}
            <tr>
              <td></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <Porchese cart={cart} newToken={newToken} />
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h1 className={style.placeholder}>No hay productos agregados</h1>
      )}
    </div>
  );
};

export default PorchaseCard;
