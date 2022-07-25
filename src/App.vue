<template>
  <nav>
    <router-link to="/">Login</router-link> |
    <router-link to="/transactions">Purchase-Sale</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view></router-view>
</template>
<script>
  export default  {
    data() {
      return {};
    }
  }
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
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
.body {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
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
  color: #42b983;
}
</style>
