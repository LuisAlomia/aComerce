import React from "react";
import { useState, useEffect } from "react";
import { getProductsServices } from "../../../services/getProductServices";
import BoxProducts from "../components/BoxProducts";
import FormProducts from "../components/FormProducts";
import NavbarDashboard from "../components/NavbarDashboard";
import style from "../styles/layoutDashboard.module.css";
import plusIcon from "../../../assets/svg/plus.svg";
import Footer from "../../../components/footer/components/Footer";

const LayautDashboard = () => {
  const [idProduct, setIdProduct] = useState();
  const [products, setProducts] = useState();
  const [formHidden, setFormHidden] = useState(false);

  const getProducts = () => {
    getProductsServices().then((resp) => setProducts(resp.data));
  };

  const handleFormHidden = () => {
    setFormHidden(!formHidden);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <nav className={style.navbar}>
        <div onClick={handleFormHidden} className={style.contentIcon}>
          <img src={plusIcon} alt="icon" />
        </div>
        <NavbarDashboard />
      </nav>
      <div className={style.content}>
        <section className={style.sectionForm}>
          <FormProducts
            idProduct={idProduct}
            setIdProduct={setIdProduct}
            getProducts={getProducts}
          />
        </section>
        {formHidden === true && (
          <section className={style.sectionFormMovil}>
            <FormProducts
              idProduct={idProduct}
              setIdProduct={setIdProduct}
              getProducts={getProducts}
            />
          </section>
        )}
        <section className={style.sectionBox}>
          <BoxProducts
            setIdProduct={setIdProduct}
            getProducts={getProducts}
            products={products}
          />
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default LayautDashboard;
