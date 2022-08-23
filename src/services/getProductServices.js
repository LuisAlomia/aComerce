import axios from "axios";
import { urldeploymentProduct, urldevelopingProduct } from "../utils/urlConfig";

const baseUrl = urldeploymentProduct;

export const getProductsServices = () => {
  return axios
    .get(baseUrl)
    .then((resp) => resp.data)
    .catch((err) => console.log(err));
};

export const getIdProductsServices = (id) => {
  return axios
    .get(`${baseUrl}/${id}`)
    .then((resp) => resp.data.data)
    .catch((err) => console.log(err));
};
