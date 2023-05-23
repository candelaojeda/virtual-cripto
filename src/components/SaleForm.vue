<template>
  <div class="sale">
    <form action="#" method="post">
      <div class="criptos">
        <h2>SELL VIRTUAL CRIPTOS</h2>
        <div class="select">
          <select id="standard-select" v-model="sellBuy.crypto_code" required>
            <option value="cript0">Select cripto</option>
            <option value="cript1">BITCOIN</option>
            <option value="cript2">ETHEREUM</option>
            <option value="cript3">THETER</option>
            <option value="cript4">USD COIN</option>
            <option value="cript5">BINANCE USD</option>
          </select>
        </div>
      </div>
      <div class="cantVenta">
        <input
          type="number"
          id="cantSale"
          name="cantBuy"
          v-model="sellBuy.crypto_amount"
          placeholder="Quantity to sale"
          required
        />
      </div>
      <div class="pagoVenta">
        <input
          type="number"
          id="amount"
          name="amount"
          v-model="sellBuy.money"
          placeholder="Value"
          required
        />
      </div>
      <div class="fechaVenta">
        <input
          type="datetime-local"
          id="timeHour"
          name="timeHour"
          v-model="sellBuy.datetime"
          required
        />
      </div>
      <button class="btn" type="submit" @click="saleCripto">SELL</button>
    </form>
  </div>
</template>

<script>
import transactions from "@/services/transactions.js";
export default {
  name: "SaleForm",
  data() {
    return {
      sellBuy: {
        user_id: this.$store.state.idUser,
        action: "sale",
        crypto_code: "cript0",
        crypto_amount: "",
        money: "",
        datetime: "",
      },
    };
  },
  methods: {
    saleCripto() {
      if (this.sellBuy.crypto_amount === "") {
        this.$toast.error("Enter the amount to sell.");
      } else if (!parseFloat(this.sellBuy.crypto_amount)) {
        this.$toast.error("You must enter a numeric value.");
      } else if (parseFloat(this.sellBuy.crypto_amount) <= 0) {
        this.$toast.error("The amount to enter must be greater than 0.");
      } else if (this.sellBuy.money === "") {
        this.$toast.error("The field must not be empty.");
      } else if (!parseFloat(this.sellBuy.money)) {
        this.$toast.error("You must enter a numeric value.");
      } else if (parseFloat(this.sellBuy.money) <= 0) {
        this.$toast.error("The amount to enter must be greater than 0.");
      } else if (this.sellBuy.datetime === "") {
        this.$toast.error("You must enter the date and time of the sale.");
      } else {
        transactions.newTransaction(this.sellBuy)
          .then(() => {
            this.$toast.info("Sale made successfully!");
          })
          .catch(() => {
            this.$toast.error("Error making the sale.");
          });
      }
    },
  },
  created() {},
  computed: {},
};
</script>

<style scoped>
.sale input {
  width: 100%;
  display: block;
  border: none;
  outline: none;
  background: none;
  font-size: 1.2rem;
  color: #666;
  padding: 10px 15px 15px 10px;
  padding-left: 20px;
  margin-bottom: 25px;
}
.btn {
  box-shadow: none;
  width: 100%;
  height: 40px;
  background-color: #0a70a0;
  color: #fff;
  border-radius: 25px;
  letter-spacing: 1.3px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}
</style>
