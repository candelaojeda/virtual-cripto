<template>
  <div class="purchase">
    <form action="#" method="post">
      <div class="criptos">
        <h2>BUY VIRTUAL CRIPTOS</h2>
        <div class="select">
          <select id="standard-select" v-model="sellBuy.action">
            <option value="">Select operation</option>
            <option value="sale">SALE</option>
            <option value="purchase">PURCHASE</option>
          </select>
        </div>
        <div class="select">
          <select id="standard-select" v-model="sellBuy.crypto_code">
            <option value="">Select cripto</option>
            <option value="cript1">BITCOIN</option>
            <option value="cript2">ETHEREUM</option>
            <option value="cript3">THETER</option>
            <option value="cript4">USD COIN</option>
            <option value="cript5">BINANCE USD</option>
          </select>
        </div>
      </div>
      <div class="cantCompra">
        <input
          type="number"
          id="cantBuy"
          name="cantBuy"
          v-model="sellBuy.crypto_amount"
          placeholder="Quantity to buy"
        />
      </div>
      <div class="pagoCompra">
        <input
          type="number"
          id="amount"
          name="amount"
          v-model="sellBuy.money"
          placeholder="Value"
        />
      </div>
      <div class="fechaCompra">
        <input type="datetime-local" id="timeHour" name="timeHour" v-model="sellBuy.datetime" />
      </div>
      <button class="btn" type="submit" @click.prevent="editCripto">EDIT</button>
      <button v-on:click="cancel">CANCEL</button>
    </form>
  </div>
</template>

<script>
import transactions from "@/services/transactions.js";

export default {
  name: "EditForm",
  data() {
    return {
      sellBuy: {
        user_id: this.$store.state.idUser,
        action: "",
        crypto_code: "",
        crypto_amount: "",
        money: "",
        datetime: "",
      },
    };
  },
  methods: {
    cancel() {
      this.$router.push("/transactions");
    },
    editCripto() {
      if (this.sellBuy.crypto_amount === "") {
        this.$toast.error("Enter the amount to buy.");
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
        this.$toast.error("You must enter the date and time.");
      } else {
        transactions
          .modifyTransaction(this.id, this.sellBuy)
          .then(() => {
            this.$toast.info("Successfully!");
            this.$router.push("/history");
          })
          .catch(() => {
            this.$toast.error("Error when making the operation.");
          });
      }
    },
  },
  created() {},
  computed: {},
};
</script>

<style></style>
