import { useNavigate } from "react-router-dom";
import AddCart from "../../addCart/components/addCart";
import style from "../styles/card.module.css";

const Card = ({ item }) => {
  const navigate = useNavigate();

  const handleDescriptionShoes = (id) => {
    navigate(`/shoes/${id}`);
  };

  return (
    <figure className={style.card}>
      <div className={style.cart}>
        <AddCart item={item} />
      </div>
      <div onClick={() => handleDescriptionShoes(item._id)}>
        <p className={style.cardPrice}>
          {item?.price} <b>$</b>
        </p>
        <h3 className={style.cardName}>{item?.productname}</h3>
        <div className={style.cardImage}>
          <img
            className={style.img}
            src={item?.image}
            alt={item?.productname}
          />
        </div>
        <div className={style.frame}></div>
      </div>
    </figure>
  );
};

export default Card;
