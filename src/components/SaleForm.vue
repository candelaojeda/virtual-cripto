<template>
  <div class="sale">
    <form action="#" method="post">
      <div class="criptos">
        <h2>SELL VIRTUAL CRIPTOS</h2>
        <div class="select">
          <select
            id="standard-select"
            v-model="sellBuy.crypto_code"
            @change="getAgencies(sellBuy.crypto_code)"
          >
            <option value="" disabled selected hidden>SELECT CRIPTO</option>
            <option value="BTC">BITCOIN</option>
            <option value="ETH">ETHEREUM</option>
            <option value="USDC">USDC</option>
            <option value="USDT">USDT</option>
            <option value="BUSD">BINANCE USD</option>
          </select>
        </div>
      </div>
      <div class="select">
        <select
          id="standard-select"
          v-model="selectedAgency"
          @change="enableAmount()"
          :disabled="selectAgenciesDisabled"
        >
          <option value="" disabled selected hidden>SELECT AGENCY</option>
          <option v-for="agency in agencies" :key="agency.agency" :value="agency">
            {{ agency.agency.toUpperCase() + " - Sale price: " + agency.values.totalAsk }}
          </option>
        </select>
      </div>
      <div class="cantVenta">
        <input
          type="number"
          id="cantSale"
          name="cantSale"
          v-model="sellBuy.crypto_amount"
          placeholder="QUANTITY TO SALE"
          required
          :disabled="setAmountDisabled"
          @input="calculateAmount()"
        />
      </div>
      <div class="pagoVenta">
        <input
          type="number"
          id="amount"
          name="amount"
          v-model="sellBuy.money"
          placeholder="VALUE"
          required
          disabled
        />
      </div>

      <button class="btn" type="submit" @click.prevent="saleCripto">SELL</button>
    </form>
  </div>
</template>

<script>
import transactions from "@/services/transactions.js";
import cryptoServices from "../services/criptoServices.js";

export default {
  name: "SaleForm",
  data() {
    return {
      sellBuy: {
        user_id: this.$store.state.idUser,
        action: "sale",
        crypto_code: "",
        crypto_amount: "",
        money: "",
        datetime: "",
      },
      selectedAgency: "",
      agencies: [],
      selectAgenciesDisabled: true,
      setAmountDisabled: true,
    };
  },
  computed: {},
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
      } else {
        this.sellBuy.datetime = new Date();
        transactions
          .newTransaction(this.sellBuy)
          .then(() => {
            this.$toast.info("Successfully!");
            this.$store.commit("insertTransactions");
          })
          .catch((err) => {
            this.$toast.error("Error:" + err.message);
          });
      }
    },
    getAgencies(cripto) {
      cryptoServices
        .getAgenciesInformation(cripto)
        .then((res) => {
          this.agencies = Object.keys(res.data).map((agency, index) => {
            return { agency: agency, values: Object.values(res.data)[index] };
          });
          this.selectAgenciesDisabled = false;
        })
        .catch();
    },
    enableAmount() {
      this.setAmountDisabled = false;
    },
    calculateAmount() {
      this.sellBuy.money = (
        this.sellBuy.crypto_amount * this.selectedAgency.values.totalAsk
      ).toFixed(2);
    },
  },
};
</script>

<style scoped>
.select select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.select select::-ms-expand {
  display: none;
}
.select {
  width: 100%;
  position: relative;
}
.select select {
  display: inline-block;
  width: 100%;
  cursor: pointer;
  padding: 10px 10px;
  padding-left: 20px;
  margin-bottom: 25px;
  margin-top: 25px;
  height: 42px;
  background: #f0f0f0;
  font-size: 1em;
  color: #3f3f3f;
  font-family: "Quicksand", sans-serif;
  border: 2px solid #7b7b7b;
  border-radius: 12px;
  transition: all 0.25s ease;
}
.select select:hover {
  background: #b1d4e8;
}
.select i {
  position: absolute;
  right: 20px;
  top: calc(50% - 26px);
  width: 16px;
  height: 16px;
  display: block;
  border-left: 4px solid #b1d4e8;
  border-bottom: 4px solid #b1d4e8;
  transform: rotate(-45deg);
  transition: all 0.25s ease;
}
.select:hover i {
  margin-top: 3px;
}
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
  width: 100px;
  height: 40px;
  background-color: #0a70a0;
  color: #ffffff;
  border-radius: 15px;
  letter-spacing: 1.3px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}
</style>
