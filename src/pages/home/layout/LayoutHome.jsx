import { useEffect } from "react";
import Footer from "../../../components/footer/components/Footer";
import Navbar from "../../../components/navbar/components/Navbar";
import Header from "../components/Header";
import ListProducts from "../components/ListProducts";
import style from "../styles/layoutHome.module.css";

const LayoutHome = ({ token, setToken }) => {
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")));
  }, []);

  return (
    <div className={style.content}>
      <nav className={style.nav}>
        <Navbar />
      </nav>
      <header className={style.header}>
        <Header />
      </header>
      <main>
        <section className={style.sectionListProducts}>
          <ListProducts />
        </section>
      </main>
      <footer className={style.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default LayoutHome;
