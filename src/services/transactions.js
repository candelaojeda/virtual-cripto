import axios from "axios";

const clienteAPI = axios.create({
  baseURL: "https://laboratorio3-f36a.restdb.io/rest",
  headers: { "x-apiKey": "60eb09146661365596af552f" },
});

export default{
    
}