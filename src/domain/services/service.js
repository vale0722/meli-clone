import axios from "axios";
import config from "../config";

console.log(config.backend_url);
const service = axios.create({ baseURL: `${config.backend_url}` });

export default service;
