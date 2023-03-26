<template>
  <div class="background">
    <nav>
      <router-link to="/transactions">Purchase-Sale</router-link> |
      <router-link to="/history">View History</router-link> |
      <router-link to="/status">Actual Status</router-link> |
      <router-link to="/investments">Investments</router-link>
      <div class="right">
        <p>
          <b>#{{ $store.state.idUser }}</b>
        </p>
        <button v-on:click="back()">BACK</button>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.push("/");
    },
  },
  created() {
    if (this.$store.state.idUser == "") {
      this.$router.push({ name: "login" });
    }
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.background {
  background-image: url("./assets/img-logo.avif");
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.login {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -10px;
  bottom: -10px;
  width: auto;
  height: auto;
  background-image: url("./assets/img-logo.avif");
  background-size: cover;
  z-index: 0;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #0a70a0;
}
.right {
  display: flex;
  flex-direction: row;
  align-content: right;
  text-align: right;
  justify-content: right;
  margin-top: 0px;
  color: #ffffff;
}
p {
  padding: 10px;
}
button {
  padding: 10px;
  height: 40px;
  width: 70px;
  background-color: #0a70a0;
  text-align: center;
  align-content: center;
  align-items: center;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
}
</style>
