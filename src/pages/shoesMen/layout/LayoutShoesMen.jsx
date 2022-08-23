import Footer from "../../../components/footer/components/Footer";
import Navbar from "../../../components/navbar/components/Navbar";
import ListProducts from "../components/ListProducts";
import style from "../styles/layoutShoesMen.module.css";

const LayoutShoesMen = () => {
  return (
    <div className={style.content}>
      <nav className={style.nav}>
        <Navbar />
      </nav>
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

export default LayoutShoesMen;
