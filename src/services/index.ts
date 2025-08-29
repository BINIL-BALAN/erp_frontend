import axios from "axios";
import {baseUrl} from "../constant.ts"
const api = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

export default api;
