<template>
  <div class="body">
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>CRIPTOCURRENCY</th>
            <th>QUANTITY</th>
            <th>MONEY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p v-for="coin in wallet" :key="coin.crypto_code">{{ coin.crypto_code }}</p>
            </td>
            <td>
              <p v-for="coin in wallet" :key="coin.crypto_code">{{ coin.crypto_amount }}</p>
            </td>
            <td>
              <p v-for="coin in wallet" :key="coin.crypto_code">${{ coin.money }}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>TOTAL</p>
            </td>
            <td><p></p></td>
            <td><p>$</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      wallet: "getCurrentStatus",
    }),
  },
  methods: {},
};
</script>

<style scoped>
.body {
  display: inline-block;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
</style>
