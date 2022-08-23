import { useForm } from "react-hook-form";
import { registerServices } from "../services/registerServices";
import { useNavigate } from "react-router-dom";
import style from "../style/formLoginRegister.module.css";
import imgRegister from "../../../assets/images/imgRegister.jpg";
import arrowLeft from "../../../assets/svg/arrow-left.svg";

const FormRegister = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    registerServices(data).then((resp) => navigate("/Login"));
    reset();
  };

  const login = () => navigate("/Login");

  const home = () => navigate("/");

  return (
    <div className={style.content}>
      <div className={style.contentForm}>
        <div onClick={home} className={style.constentArrow}>
          <img className={style.arrow} src={arrowLeft} alt="arrow left" />{" "}
        </div>
        <form className={style.form} onSubmit={handleSubmit(submit)}>
          <h1 className={style.formTitle}>Registrarse</h1>
          <input
            className={style.formInput}
            type="text"
            name="name"
            placeholder="Name"
            autoFocus={true}
            {...register("name", { required: true })}
          />
          <input
            className={style.formInput}
            type="text"
            name="username"
            placeholder="Username"
            {...register("username", { required: true })}
          />
          <input
            className={style.formInput}
            type="password"
            name="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
          <button className={style.formButton}>Registrarse</button>
          <p className={style.formText}>
            Ya tiene una cuenta? <span onClick={login}>inicia sesión.</span>
          </p>
        </form>
        <img
          className={`${style.image} ${style.imgRegister}`}
          src={imgRegister}
          alt="imagen zapatillas nike"
        />
      </div>
    </div>
  );
};

export default FormRegister;
