import Footer from "../../../components/footer/components/Footer";
import Navbar from "../../../components/navbar/components/Navbar";
import ListProducts from "../components/ListProducts";
import style from "../styles/layoutShoesWomen.module.css";

const LayoutShoesWomen = () => {
  return (
    <div>
      <nav className={style.nav}>
        <Navbar />
      </nav>
      <main>
        <section className={style.sectionListProducts}>
          <ListProducts />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LayoutShoesWomen;
