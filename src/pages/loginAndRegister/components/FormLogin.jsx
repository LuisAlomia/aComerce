import { useForm } from "react-hook-form";
import { useLocalStorage } from "../../../hooks/useLocalStorege";
import { loginServices } from "../services/loginServices";
import { useNavigate } from "react-router-dom";
import imgLogin from "../../../assets/images/imgLogin.jpg";
import style from "../style/formLoginRegister.module.css";
import arrowLeft from "../../../assets/svg/arrow-left.svg";

const FormLogin = () => {
  const [token, setToken] = useLocalStorage("token", "");
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    loginServices(data).then((resp) => {
      setToken({
        token: resp.data.token,
        role: resp.data.user.role,
        username: resp.data.user.username,
      });
      navigate("/");
    });
    reset();
  };

  const checkIn = () => navigate("/register");

  const home = () => navigate("/");

  return (
    <div className={style.content}>
      <div className={style.contentForm}>
        <div onClick={home} className={style.constentArrow}>
          <img className={style.arrow} src={arrowLeft} alt="arrow left" />{" "}
        </div>
        <img
          className={`${style.image} ${style.imgLogin}`}
          src={imgLogin}
          alt="imagen zapatillas nike"
        />
        <form className={style.form} onSubmit={handleSubmit(submit)}>
          <h1 className={style.formTitle}>Iniciar</h1>
          <input
            className={style.formInput}
            type="text"
            name="username"
            placeholder="username"
            autoFocus={true}
            {...register("username", { require: true })}
          />
          <input
            className={style.formInput}
            type="password"
            name="password"
            placeholder="password"
            {...register("password", { require: true })}
          />
          <button className={style.formButton}>Iniciar sesion</button>
          <p className={style.formText}>
            Ya tiene una cuenta? <span onClick={checkIn}>registrate.</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
