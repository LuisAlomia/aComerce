import { useNavigate } from "react-router-dom";
import imgMen from "../../../assets/images/imgMen.jpg";
import imgWoman from "../../../assets/images/imgWoman.jpg";
import style from "../styles/header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const handlePageWomen = () => {
    navigate("/shoes/women");
  };

  const handlePageMen = () => {
    navigate("/shoes/Men");
  };

  return (
    <div className={style.header}>
      <div onClick={handlePageMen} className={style.images}>
        <img src={imgMen} alt="image men" />
        <h3 className={style.placeholder}>Hombres</h3>
      </div>
      <div onClick={handlePageWomen} className={style.images}>
        <img src={imgWoman} alt="image woman" />
        <h3 className={style.placeholder}>Mujeres</h3>
      </div>
    </div>
  );
};

export default Header;
