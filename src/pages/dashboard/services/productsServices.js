import axios from "axios";
import {
  urldeploymentProduct,
  urldevelopingProduct,
} from "../../../utils/urlConfig";

const baseUrl = urldeploymentProduct;

export const getIdProductsServices = (id) => {
  return axios
    .get(`${baseUrl}/${id}`)
    .then((resp) => resp.data.data)
    .catch((err) => console.log(err));
};

export const postProductsServices = (newProduct, token) => {
  return axios
    .post(baseUrl, newProduct, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((resp) => resp)
    .catch((err) => console.log(err));
};

export const deleteProductsServices = (id, token) => {
  return axios
    .delete(`${baseUrl}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((resp) => resp)
    .catch((err) => console.log(err));
};

export const putProductsServices = (upProduct, id, token) => {
  return axios
    .put(`${baseUrl}/${id}`, upProduct, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((resp) => resp);
};
