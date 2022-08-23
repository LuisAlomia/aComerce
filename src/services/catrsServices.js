import axios from "axios";
import { urldeploymentCart, urldevelopingCart } from "../utils/urlConfig";

const baseUrl = urldeploymentCart;

export const getPurchase = () => {
  return axios
    .get(baseUrl)
    .then((resp) => resp.data)
    .catch((err) => err);
};

export const postPurchase = (carts, token) => {
  return axios
    .post(baseUrl, carts, { headers: { Authorization: `Bearer ${token}` } })
    .then((resp) => resp.data)
    .catch((err) => err);
};
