import axios from "axios";

const clienteAPI = axios.create({
  baseURL: "https://laboratorio3-f36a.restdb.io/rest",
  headers: { "x-apiKey": "60eb09146661365596af552f" },
});

export default {
  getTransactions(idUser) {
    console.log("pepito");
    return clienteAPI.get(`/transactions?q={"user_id": "${idUser}"}`);
  },
  getTransactionsById(id) {
    return clienteAPI.get(`/transactions/${id}`);
  },
  newTransaction(sellBuy) {
    return clienteAPI.post("/transactions", sellBuy);
  },
  modifyTransaction(id, editTransaction) {
    return clienteAPI.patch(`/transactions/${id}`, editTransaction);
  },
  deleteTransaction(id) {
    return clienteAPI.delete(`/transactions/${id}`);
  },
};
