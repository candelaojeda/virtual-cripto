<template>
  <!-- <div class="edit">
    <form action="#" method="post">
      <h2>EDIT VIRTUAL CRIPTOS</h2>
      <div class="select">
        <select id="standard-select" v-model="sellBuy.action">
          <option value="">SELECT OPERATION</option>
          <option value="sale">SALE</option>
          <option value="purchase">PURCHASE</option>
        </select>
      </div>
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
      <div class="select">
        <select
          id="standard-select"
          v-model="selectedAgency"
          @change="enableAmount()"
          :disabled="selectAgenciesDisabled"
        >
          <option value="" disabled selected hidden>SELECT AGENCY</option>
          <option v-for="agency in agencies" :key="agency.agency" :value="agency">
            {{ agency.agency.toUpperCase() + " - Price: " + agency.values.totalAsk }}
          </option>
        </select>
      </div>
      <div class="cantCompra">
        <input
          type="number"
          id="cantBuy"
          name="cantBuy"
          v-model="sellBuy.crypto_amount"
          placeholder="QUANTITY"
          required
          :disabled="setAmountDisabled"
          @input="calculateAmount()"
        />
      </div>
      <div class="pagoCompra">
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
      <div class="btnsEdit">
        <button class="btn" type="submit" @click.prevent="editCripto">EDIT</button>
        <button class="btn" v-on:click="cancel">CANCEL</button>
      </div>
    </form>
  </div> -->
  <div class="edit">
    <form action="#" method="post">
      <h2>EDIT VIRTUAL CRIPTOS</h2>
      <div class="select">
        <select
          id="standard-select"
          v-model="sellBuy.crypto_code"
          @change="getAgencies(sellBuy.crypto_code)"
        >
          <option value="" disabled selected hidden>CRIPTOMONEDA</option>
          <option value="BTC">BITCOIN</option>
          <option value="ETH">ETHEREUM</option>
          <option value="USDC">USDC</option>
          <option value="USDT">USDT</option>
          <option value="BUSD">BINANCE USD</option>
        </select>
        <i></i>
      </div>
      <div class="select">
        <select
          id="standard-select"
          v-model="selectedAgency"
          @change="enableAmount()"
          :disabled="selectAgenciesDisabled"
        >
          <option value="" disabled selected hidden>Select agency</option>
          <option v-for="agency in agencies" :key="agency.agency" :value="agency">
            {{ agency.agency.toUpperCase() + " - Price: " + agency.values.totalAsk }}
          </option>
        </select>
        <i></i>
      </div>
      <div class="cantCompra">
        <input
          type="number"
          id="cantBuy"
          name="cantBuy"
          v-model="sellBuy.crypto_amount"
          placeholder="QUANTITY TO BUY"
          required
          @input="calculateAmount()"
        />
      </div>
      <div class="pagoCompra">
        <input
          type="number"
          id="amount"
          name="amount"
          v-model="sellBuy.money"
          placeholder="AMOUNT $"
          required
          disabled
        />
      </div>
      <div class="select">
        <select id="standard-select" v-model="sellBuy.action">
          <option value="">TRANSACTION</option>
          <option value="purchase">PURCHASE</option>
          <option value="sale">SALE</option>
        </select>
        <i></i>
      </div>
      <div class="btnsEdit">
        <button class="btn" type="submit" @click.prevent="editCripto">EDIT</button>
        <button class="btn" type="submit" @click.prevent="cancel">CANCELAR</button>
      </div>
    </form>
  </div>
</template>

<script>
import transactions from "@/services/transactions.js";
import cryptoServices from "../services/criptoServices.js";

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
      selectedAgency: "",
      agencies: [],
      selectAgenciesDisabled: true,
      setAmountDisabled: true,
    };
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
  },
  mounted() {
    transactions
      .getTransactionsById(this.id)
      .then((response) => {
        this.sellBuy = response.data;
      })
      .catch(() => {
        this.$toast.error("Error.");
      });
  },
  methods: {
    cancel() {
      this.$router.push("/history");
    },
    editCripto() {
      if (this.sellBuy.action === "") {
        this.$toast.error("Select an operation.");
      } else if (this.sellBuy.crypto_code === "") {
        this.$toast.error("Select a criptocoin.");
      } else {
        transactions
          .modifyTransaction(this.id, this.sellBuy)
          .then(() => {
            this.$toast.info("Successfully edition!");
            this.$router.push("/history");
          })
          .catch(() => {
            this.$toast.error("Error when making the operation.");
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
.edit {
  display: inline-block;
  opacity: 0.8;
  width: 500px;
  min-height: 500px;
  padding: 50px;
  border-radius: 15px;
  background: #a6d7fd;
  color: #090274;
}
.cantEdit {
  margin: 20px 20px;
}
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
.purchase input {
  width: 100%;
  display: block;
  border: none;
  outline: none;
  background: none;
  font-size: 1.2rem;
  color: #666;
  padding: 10px 15px 15px 10px;
  padding-left: 20px;
}
.btn {
  box-shadow: none;
  width: 300px;
  height: 42px;
  padding: 10px;
  text-align: center;
  background-color: #0a70a0;
  color: #ffffff;
  border-radius: 15px;
  letter-spacing: 1.3px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  margin: 10px;
}
.btnsEdit {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 15px 15px 0px 15px;
}
#cantBuy {
  width: 100%;
  border-radius: 12px;
  padding: 10px;
  margin-top: 25px;
}
#amount {
  width: 100%;
  border-radius: 12px;
  padding: 10px;
  margin-top: 25px;
}
</style>
