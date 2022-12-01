<template>
  <div class="body">
    <!-- <nav>
      <div class="view">
        <button class="btn" id="view" @click="table = true">VIEW HISTORY</button>
      </div>
      <div class="modife">
        <button @click="edit = true">EDIT TRANSACTION</button>
      </div>
      <div class="delete">
        <button>DELETE TRANSACTION</button>
      </div>
    </nav> -->
    <div class="container">
      <table v-show="table">
        <thead>
          <tr>
            <th>CRIPTOCURRENCY</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th>TYPE OF OPERATION</th>
            <th>DATE OF OPERATION</th>
            <th>TIME OF OPERATION</th>
            <th>OTHER OPERATIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction._id">
            <td>{{ transaction.crypto_code }}</td>
            <td>{{ transaction.crypto_amount }}</td>
            <td>$ {{ transaction.money }}</td>
            <td>{{ transaction.action }}</td>
            <td>{{ time(transaction.datetime) }}</td>
            <td>{{ hours(transaction.datetime) }}</td>
            <td>
              <!-- <router-link :to="{ name: 'Edit', query: { id: transaction._id } }">
                <label @click="editRow" class="editTransaction">Edit |</label>
              </router-link> -->
              <label @click="(table = false), (edit = true)" class="editTransaction">Edit |</label>
              <!-- <router-link :to="{ name: 'Delete', query: { id: transaction._id } }">
                <label @click="deleteRow" class="deleteTransaction"> Eliminar</label>
              </router-link> -->
              <label @click="deleteRow(transaction._id)" class="editTransaction"> Delete</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-show="edit">
      <EditForm />
    </div>
  </div>
</template>

<script>
import transactions from "@/services/transactions.js";
import EditForm from "@/components/EditForm.vue";
import { mapGetters } from "vuex";

export default {
  name: "history",
  components: { EditForm },
  data() {
    return {
      countTransaction: 0,
      table: true,
      edit: false,
    };
  },
  props: {},
  computed: {
    ...mapGetters({
      transactions: "getTransactions",
    }),
  },
  methods: {
    // insertTransaction() {
    //   transactions
    //     .getTransactions(state.idUser)
    //     .then((res) => {
    //       state.transactions = res.data;
    //     })
    //     .catch(() => {
    //       alert("Error!");
    //     });
    // },
    // nameCriptos(crypto_code) {
    //   if (crypto_code == "cript1") return "Bitcoin";
    //   if (crypto_code == "cript2") return "Ethereum";
    //   if (crypto_code == "cript3") return "Theter";
    //   if (crypto_code == "cript4") return "USD Coin";
    //   if (crypto_code == "cript5") return "Binance USD";
    // },
    time(datetime) {
      return datetime.slice(0, 10);
    },
    hours(datetime) {
      return datetime.slice(11, 16) + " hours";
    },
    deleteRow(id) {
      if (confirm("Do you want to delete the selected row?")) {
        console.log(id);
        transactions
          .deleteTransaction(id)
          .then(() => {
            this.$toast.info("Succefully delete!");
            this.$store.commit("insertTransactions");
          })
          .catch((err) => {
            this.$toast.error(`Error: ${err}`);
          });
      }
    },
    // loadTransactions() {
    //   transactions
    //     .getTransactions(this.$store.state.idUser)
    //     .then((res) => {
    //       this.transactions = res.data;
    //     })
    //     .catch(() => {
    //       this.$toast.error("Error!");
    //     });
    // },
  },
  // mounted() {
  //   transactions
  //     .getTransactions(this.$store.state.idUser)
  //     .then((res) => {
  //       this.transactions = res.data;
  //       this.countTransaction = this.transactions.length;
  //     })
  //     .catch(() => {
  //       this.$toast.error("Error!");
  //     });
  // },
};
</script>

<style scoped>
.body {
  display: inline-block;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.btn {
  box-shadow: none;
  width: 100%;
  height: 40px;
  padding: 10px;
  text-align: center;
  opacity: 0.8;
  background-color: #0a70a0;
  color: #fff;
  border-radius: 25px;
  letter-spacing: 1.3px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}
nav {
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  margin: 0;
}
nav button {
  cursor: pointer;
}
table {
  display: inline-block;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  color: rgb(21, 4, 4);
  font-size: 14px;
  table-layout: fixed;
  border-collapse: collapse;
  background: #a6d7fd;
  opacity: 0.8;
}
thead {
  background: #090274;
  color: #fff;
}
th {
  padding: 20px 15px;
  font-weight: 700;
  text-transform: uppercase;
}
td {
  padding: 20px 15px;
  font-weight: 700;
  text-transform: uppercase;
  border-bottom: solid 1px rgb(255, 255, 255, 0.2);
}
tbody tr {
  cursor: pointer;
}
tbody tr:hover {
  background: #090274;
  color: #a6d7fd;
}
.editTransaction {
  cursor: pointer;
}
.editTransaction:hover {
  cursor: pointer;
  text-decoration: underline;
  color: #fff;
}
</style>
