import axios from "axios";

const api = axios.create({
  baseURL: "https://taskapp-backend-production-7161.up.railway.app/api",

});
export default api;
