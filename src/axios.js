import axios from "axios";

const baseUrl = axios.create({
  // baseURL: "http://localhost:5003/api/v1",
  baseURL: "https://backend-evangadi-2bwa.onrender.com/api/v1",
});

export default baseUrl;
