import { createStore } from "vuex";
import transactions from "@/services/transactions";

export default createStore({
  state: {
    idUser: "",
    transactions: [],
  },
  getters: {},
  mutations: {
    newUser(state, idUser) {
      state.idUser = idUser;
    },
    insertTransactions(state) {
      transactions
        .getTransactions(state.idUser)
        .then((res) => {
          state.transactions = res.data;
        })
        .catch(() => {
          alert("Error!");
        });
    },
  },
  actions: {},
  modules: {},
});
