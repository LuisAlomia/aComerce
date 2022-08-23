import Footer from "../../../components/footer/components/Footer";
import Navbar from "../../../components/navbar/components/Navbar";
import PorchaseCard from "../components/PorchaseCard";
import style from "../styles/layoutCart.module.css";

const LayoutCart = () => {
  return (
    <div className={style.content}>
      <nav className={style.nav}>
        <Navbar />
      </nav>
      <main className={style.main}>
        <PorchaseCard />
      </main>
      <footer className={style.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default LayoutCart;
