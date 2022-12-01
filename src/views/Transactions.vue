<template>
  <div class="body">
    <div class="btnP">
      <div class="form">
        <PurchaseForm />
      </div>
    </div>
    <div class="btnP">
      <div class="form">
        <SaleForm />
      </div>
    </div>
    <div>
      <button class="btn" @click="enter">VIEW HISTORY</button>
    </div>
  </div>
</template>

<script>
import PurchaseForm from "@/components/PurchaseForm.vue";
import SaleForm from "@/components/SaleForm.vue";

export default {
  name: "Transactions",
  components: { PurchaseForm, SaleForm },
  data() {
    return {};
  },
  methods: {
    enter() {
      this.$router.push("/history");
    },
  },
};
</script>

<style>
.body {
  display: flex;
  align-items: center;
  justify-content: center;
}
.btnP {
  opacity: 0.8;
  width: 500px;
  min-height: 500px;
  margin: 20px 20px;
  padding: 40px 30px 30px 30px;
  background-color: #ecf0f3;
  border-radius: 15px;
  background: #a6d7fd;
  color: #090274;
}
.btn {
  box-shadow: none;
  width: 100%;
  height: 40px;
  padding: 10px;
  opacity: 0.8;
  text-align: center;
  background-color: #0a70a0;
  color: #fff;
  border-radius: 25px;
  letter-spacing: 1.3px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}
</style>
