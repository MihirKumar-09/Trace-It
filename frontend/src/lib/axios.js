import Axios from "axios";
import { API_URL } from "./api";

const axios = Axios.create({
  baseURL: `${API_URL}`,
  withCredentials: true,
});

export default axios;
