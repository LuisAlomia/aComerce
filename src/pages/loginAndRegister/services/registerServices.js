import axios from "axios";
import {
  urldeploymentAuthR,
  urldevelopingAuthR,
} from "../../../utils/urlConfig";

const baseUrl = urldeploymentAuthR;

export const registerServices = (register) => {
  return axios
    .post(baseUrl, register)
    .then((resp) => resp.data)
    .catch((err) => console.log(err));
};
