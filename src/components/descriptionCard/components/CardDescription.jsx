import { useState } from "react";
import AddCart from "../../addCart/components/addCart";
import nikeLogo from "../../../assets/images/Nikelogo.png";
import style from "../styles/cardDescription.module.css";

const CardDescription = ({ shoe }) => {
  const [image, setImage] = useState(undefined);

  const imgArray = [
    shoe.image1,
    shoe.image2,
    shoe.image3,
    shoe.image4,
    shoe.image5,
  ];

  const handleImage = (img) => {
    setImage(img);
  };

  return (
    <div className={style.content}>
      <div className={style.logo}>
        <img src={nikeLogo} alt={nikeLogo} />
      </div>
      <div className={style.descrription}>
        <span className={style.buttonporchese}>
          Añar al Carrito
          <AddCart item={shoe} />
        </span>
        <h2 className={style.title}>{shoe.productname}</h2>
        <h3>Nike {shoe.category}</h3>
        <p className={style.text}>{shoe.description}</p>
      </div>
      <div className={style.contentImages}>
        <ul className={style.contentItem}>
          {imgArray
            .filter((img) => img !== "N/E")
            .map((img) => (
              <li key={img} className={style.item}>
                <img
                  className={style.imgItem}
                  onClick={() => handleImage(img)}
                  src={img}
                  alt={img}
                />
              </li>
            ))}
        </ul>
        <div>
          <div className={style.frame}></div>
          <img
            className={style.image}
            src={image ? image : shoe.image1}
            alt={shoe.productname}
          />
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
