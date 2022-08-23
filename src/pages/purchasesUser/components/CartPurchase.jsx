import { useLocalStorage } from "../../../hooks/useLocalStorege";
import style from "../styles/cartPurchases.module.css";

const CartPurchase = ({ item }) => {
  const [token] = useLocalStorage("token", "");
  const { username } = token;

  return (
    <>
      {item.carts
        .filter((item) => item.username === username)
        .map((item) =>
          item.cart.map((item, index) => (
            <div key={index} className={style.content}>
              <div className={style.text}>
                <h3 className={style.text}>{item.productname}</h3>
                <p className={style.text}>{item.category}</p>
                <p className={style.text}>{item.price}</p>
              </div>
              <div className={style.contentImage}>
                <img src={item.image1} alt={item.productname} />
              </div>
            </div>
          ))
        )}
    </>
  );
};

export default CartPurchase;
