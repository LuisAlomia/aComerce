import axios from "axios";
import {
  urldeploymentAuthL,
  urldevelopingAuthL,
} from "../../../utils/urlConfig";

const baseUrl = urldeploymentAuthL;

export const loginServices = async (user) => {
  try {
    const resp = await axios.post(baseUrl, user);
    return resp.data;
  } catch (err) {
    return console.log(err);
  }
};
