import { useNavigate } from "react-router-dom";
import style from "../styles/logout.module.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    localStorage.clear("token");
    location.reload();
  };

  return (
    <button className={`${style.buttons} ${style.full}`} onClick={handleLogout}>
      Cerrar Sesión
    </button>
  );
};

export default Logout;
