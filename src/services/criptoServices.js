import axios from "axios";

const clientApi = axios.create({
  baseURL: "https://criptoya.com/",
  withCredentials: false,
});

export default {
  getCompraVentaCriptomoneda(exchange, coin) {
    return clienteAPI.get(`/${exchange}/${coin}/ars/0.01`);
  },
  getCriptomoneda() {
    return clienteAPI.get("/cryptomkt/btc/ars/0.21");
  },
  getPrecioMoneda(coin) {
    return clienteAPI.get(`/letsbit/${coin}`);
  },
};
