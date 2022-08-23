import Footer from "../../../components/footer/components/Footer";
import Navbar from "../../../components/navbar/components/Navbar";
import PurchasesUser from "../components/PurchasesUser";
import style from "../styles/layoutPurcheses.module.css";

const LayoutPurchases = () => {
  return (
    <>
      <nav className={style.nav}>
        <Navbar />
      </nav>
      <main className={style.main}>
        <PurchasesUser />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default LayoutPurchases;
