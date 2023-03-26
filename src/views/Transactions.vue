<template>
  <div class="body">
    <div class="containerForms">
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
    <div>
      <button class="btnHistory" @click="enter">VIEW HISTORY</button>
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
.btnP {
  opacity: 0.8;
  width: 500px;
  min-height: 500px;
  margin: 20px 20px;
  padding: 40px 30px 30px 30px;
  border-radius: 15px;
  background: #a6d7fd;
  color: #090274;
}
.btnHistory {
  width: 200px;
  height: 50px;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 20px;
  background: #a6d7fd;
  color: #090274;
}
.containerForms {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
