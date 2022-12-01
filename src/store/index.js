import { createStore } from "vuex";
import transactions from "@/services/transactions";

export default createStore({
  state: {
    idUser: "",
    transactions: [],
  },
  getters: {
    getTransactions: (state) => {
      return state.transactions;
    },
    getCurrentStatus: (state) => {
      const wallet = [];
      state.transactions.forEach((transaction) => {
        console.log(transaction);
        const index = wallet.findIndex((element) => element.crypto_code == transaction.crypto_code);
        if (index == -1) {
          if (transaction.action == "sale") {
            const negativeTransaction = transaction;
            negativeTransaction.crypto_amount = -negativeTransaction.crypto_amount;
            negativeTransaction.money = -negativeTransaction.money;
            wallet.push(negativeTransaction);
          } else {
            wallet.push(transaction);
          }
        } else {
          if (transaction.action == "purchase") {
            wallet[index].crypto_amount += transaction.crypto_amount;
            wallet[index].money += transaction.money;
          } else {
            wallet[index].crypto_amount -= transaction.crypto_amount;
            wallet[index].money -= transaction.money;
          }
        }
      });
      return wallet;
    },
  },
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
