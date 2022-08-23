import { useEffect, useState } from "react";
import { getPurchase } from "../../../services/catrsServices";
import CartPurchase from "./CartPurchase";
import style from "../styles/purcheseUser.module.css";

const PurchasesUser = () => {
  const [purchases, setPurchase] = useState();

  useEffect(() => {
    getPurchase().then((resp) => {
      setPurchase(resp.data);
    });
  }, []);

  return (
    <div className={style.content}>
      <h2 className={style.title}>Registro de Compras</h2>
      {purchases?.map((item) => (
        <div key={item._id} className={style.contentCard}>
          <CartPurchase item={item} />
        </div>
      ))}
    </div>
  );
};

export default PurchasesUser;
