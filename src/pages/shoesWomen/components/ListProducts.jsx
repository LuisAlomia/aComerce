import { useState, useEffect } from "react";
import Card from "../../../components/shoesCard/components/Card";
import { getProductsServices } from "../../../services/getProductServices";
import style from "../styles/listProducts.module.css";

const ListProducts = () => {
  const [shoes, setShoes] = useState();

  useEffect(() => {
    getProductsServices().then((resp) => {
      setShoes(resp.data);
    });
  }, []);

  return (
    <div className={style.content}>
      {shoes &&
        shoes
          .filter((shoe) => shoe.category !== "men")
          .map((shoe) => <Card key={shoe._id} item={shoe} />)}
    </div>
  );
};

export default ListProducts;
