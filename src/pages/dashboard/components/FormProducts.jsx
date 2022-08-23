import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  getIdProductsServices,
  postProductsServices,
  putProductsServices,
} from "../services/productsServices";
import style from "../styles/formProducts.module.css";

const resetForm = {
  availability: "true",
  category: "",
  description: "",
  productname: "",
  sale: "false",
  salevalue: "0%",
  sizes: "38/39/40/41/42/43/44",
  price: "",
  image: "N/E",
  image1: "N/E",
  image2: "N/E",
  image3: "N/E",
  image4: "N/E",
  image5: "N/E",
};

const FormProducts = ({ idProduct, setIdProduct, getProducts }) => {
  const { register, handleSubmit, reset } = useForm();
  const item = JSON.parse(localStorage.getItem("token")) || "";
  const token = item.token;

  const submit = (data) => {
    if (idProduct) {
      putProductsServices(data, idProduct, token).then((resp) => getProducts());
      setIdProduct("");
    } else {
      postProductsServices(data, token).then((resp) => {
        console.log(resp.data.data);
        getProducts();
      });
    }
    reset(resetForm);
  };

  useEffect(() => {
    idProduct &&
      getIdProductsServices(idProduct).then((resp) => {
        reset({
          availability: resp.availability,
          category: resp.category,
          description: resp.description,
          productname: resp.productname,
          sizes: resp.sizes,
          price: resp.price,
          sale: resp.sale,
          salevalue: resp.salevalue,
          image: resp.image,
          image1: resp.image1,
          image2: resp.image2,
          image3: resp.image3,
          image4: resp.image4,
          image5: resp.image5,
        });
      });
  }, [idProduct]);

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit(submit)}>
        <h2>Crear Producto</h2>
        <input
          className={style.formInput}
          type="text"
          name="productname"
          placeholder="product name"
          autoFocus={true}
          {...register("productname", { required: true })}
        />
        <textarea
          className={style.formInput}
          type="text"
          name="description"
          placeholder="description"
          {...register("description", { required: true })}
          cols="30"
          rows="10"
        ></textarea>

        <div>
          <label className={style.formLabel} htmlFor="selectcategory">
            Categoria
          </label>
          <select
            id="selectcategory"
            className={style.formInput}
            name="category"
            {...register("category", { required: true })}
          >
            <option value="men">Hombre</option>
            <option value="famele">Mujer</option>
          </select>
        </div>
        <input
          className={style.formInput}
          type="text"
          name="sizes"
          placeholder="sizes"
          {...register("sizes", { required: true })}
        />
        <input
          className={style.formInput}
          type="text"
          name="price"
          placeholder="price"
          {...register("price", { required: true })}
        />
        <div>
          <label className={style.formLabel} htmlFor="select">
            Disponibilidad
          </label>
          <select
            id="select"
            className={style.formInput}
            name="availability"
            {...register("availability", { required: true })}
          >
            <option value="true">Disponible</option>
            <option value="false">No disponible</option>
          </select>
        </div>

        <div>
          <label className={style.formLabel} htmlFor="selectSale">
            Descuento
          </label>
          <select
            id="selectSale"
            className={style.formInput}
            name="sale"
            {...register("sale", { required: true })}
          >
            <option value="true">Disponible</option>
            <option value="false">No disponible</option>
          </select>{" "}
          <select
            className={style.formInput}
            name="salevalue"
            {...register("salevalue", { required: true })}
          >
            <option value="0%">0%</option>
            <option value="5%">5%</option>
            <option value="10%">10%</option>
            <option value="15%">15%</option>
            <option value="20%">20%</option>
            <option value="25%">25%</option>
          </select>
        </div>

        <input
          className={style.formInput}
          type="text"
          name="image"
          placeholder="image"
          {...register("image", { required: true })}
        />
        <input
          className={style.formInput}
          type="text"
          name="image1"
          placeholder="image1"
          {...register("image1")}
        />
        <input
          className={style.formInput}
          type="text"
          name="image2"
          placeholder="image2"
          {...register("image2")}
        />
        <input
          className={style.formInput}
          type="text"
          name="image3"
          placeholder="image3"
          {...register("image3")}
        />
        <input
          className={style.formInput}
          type="text"
          name="image4"
          placeholder="image4"
          {...register("image4")}
        />
        <input
          className={style.formInput}
          type="text"
          name="image5"
          placeholder="image5"
          {...register("image5")}
        />
        <button className={style.formButtom}>
          {idProduct ? "Update Product" : "Create Product"}
        </button>
      </form>
    </>
  );
};

export default FormProducts;
