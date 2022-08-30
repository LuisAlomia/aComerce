import { useEffect, useState } from "react";
import { getPurchase } from "../../../services/catrsServices";
import CartPurchase from "./CartPurchase";
import style from "../styles/purcheseUser.module.css";

import { useLocalStorage } from "../../../hooks/useLocalStorege";

const PurchasesUser = () => {
  const [purchases, setPurchase] = useState([]);
  const [buy, setBuy] = useState();
  const [token] = useLocalStorage("token", "");
  const { username } = token;
  const array = [];

  useEffect(() => {
    getPurchase().then((resp) => {
      setBuy(
        resp.data.map((item) =>
          item.carts.map(
            (item) => item.username === username && array.push(item)
          )
        )
      );
      setPurchase(array);
    });
  }, []);

  return (
    <div className={style.content}>
      <h2 className={style.title}>Registro de Compras</h2>
      {purchases?.map((item, index) => (
        <div key={index} className={style.contentCard}>
          <CartPurchase item={item} />
        </div>
      ))}
    </div>
  );
};

export default PurchasesUser;
