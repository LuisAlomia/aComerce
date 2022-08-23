import Footer from "../../../components/footer/components/Footer";
import Navbar from "../../../components/navbar/components/Navbar";
import Description from "../components/Description";
import style from "../styles/layoutDecription.module.css";

const LayoutDescription = () => {
  return (
    <div>
      <nav className={style.nav}>
        <Navbar />
      </nav>
      <main>
        <section className={style.sectionDescription}>
          <Description />
        </section>
      </main>
    </div>
  );
};

export default LayoutDescription;
