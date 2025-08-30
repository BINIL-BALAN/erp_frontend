import axios from "axios";
import {baseUrl} from "../constant.ts"
export const api = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

