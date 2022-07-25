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
</style>
