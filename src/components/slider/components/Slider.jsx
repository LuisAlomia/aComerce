import { useEffect, useState } from "react";
import { getProductsServices } from "../../../services/getProductServices";
import { useNavigate } from "react-router-dom";
import style from "../styles/slider.module.css";

const Slider = () => {
  const [sales, setSales] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getProductsServices().then((resp) => setSales(resp.data));
  }, []);

  const handleShoes = (id) => {
    navigate(`/shoes/${id}`);
  };

  return (
    <div className={style.contentSlider}>
      <div className={style.slider}>
        {sales &&
          sales
            .filter((sale) => sale.sale === "true")
            .map((sale) => (
              <div
                key={sale._id}
                onClick={() => handleShoes(sale._id)}
                className={style.content}
              >
                <div className={style.contentImage}>
                  <img src={sale.image1} alt={sale.productname} />
                </div>
                <div className={style.contentText}>
                  <p>Lo Nuevo</p>
                  <p>
                    {sale.category === "famele" ? "para Mujer" : "para Hombre"}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Slider;
