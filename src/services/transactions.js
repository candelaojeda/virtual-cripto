import axios from "axios";

const clienteAPI = axios.create({
  baseURL: "https://laboratorio3-f36a.restdb.io/rest",
  headers: { "x-apiKey": "60eb09146661365596af552f" },
});

export default {
  getTransacciones(idUser) {
    return clienteAPI.get(`/transactions?q={"user_id": "${idUser}"}`);
  },
  getTransaccionesById(id) {
    return clienteAPI.get(`/transactions/${id}`);
  },
  newTransaction(sellBuy) {
    return clienteAPI.post("/transactions", sellBuy);
  },
  modifyTransaccion(id, editTransaction) {
    return clienteAPI.put(`/transactions/${id}`, editTransaction);
  },
  deleteTransaccion(id) {
    return clienteAPI.delete(`/transactions/${id}`);
  },
};
