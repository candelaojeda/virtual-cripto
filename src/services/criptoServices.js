import axios from "axios";

const clientApi = axios.create({
  baseURL: "https://criptoya.com/",
  withCredentials: false,
});

export default {};
