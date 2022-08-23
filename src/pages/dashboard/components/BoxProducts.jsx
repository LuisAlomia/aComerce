import { deleteProductsServices } from "../services/productsServices";
import style from "../styles/boxProducts.module.css";

const BoxProducts = ({ setIdProduct, products, getProducts }) => {
  const handleUpdate = (id) => setIdProduct(id);
  const item = JSON.parse(localStorage.getItem("token")) || "";
  const token = item.token;

  const handleDelete = (id) => {
    deleteProductsServices(id, token).then((resp) => getProducts());
  };

  return (
    <div>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr className={style.row}>
            <th className={style.column}>NAME</th>
            <th className={style.column}>PRICE</th>
            <th className={style.column}>CATEGORY</th>
            <th className={style.column}>SALE</th>
            <th className={style.column}>SALE VALUE</th>
            <th className={style.column}>ACTUALIZAR</th>
            <th className={style.column}>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => {
            return (
              <tr key={product._id}>
                <td className={style.column}>{product.productname}</td>
                <td className={style.column}>{product.price}</td>
                <td className={`${style.column} ${style.row}`}>
                  {product.category}
                </td>
                <td className={style.column}>{product.sale}</td>
                <td className={style.column}>{product.salevalue}</td>
                <td className={style.column}>
                  <button
                    className={style.buttom}
                    onClick={() => handleUpdate(product._id)}
                  >
                    Actualizar
                  </button>
                </td>
                <td className={style.column}>
                  <button
                    className={style.buttom}
                    onClick={() => handleDelete(product._id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* TABLEMOVIL */}
      <table className={style.tableMovil}>
        <thead className={style.thead}>
          <tr className={style.row}>
            <th className={style.column}>NAME</th>
            <th className={style.column}>PRICE</th>
            <th className={style.column}>ACTUALIZAR</th>
            <th className={style.column}>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => {
            return (
              <tr key={product._id}>
                <td className={style.column}>{product.productname}</td>
                <td className={style.column}>{product.price}</td>
                <td className={style.column}>
                  <button
                    className={style.buttom}
                    onClick={() => handleUpdate(product._id)}
                  >
                    Actualizar
                  </button>
                </td>
                <td className={style.column}>
                  <button
                    className={style.buttom}
                    onClick={() => handleDelete(product._id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BoxProducts;
