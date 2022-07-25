<template>
  <div class="login">
    <div class="wrapper">
      <div class="text-center mt-4 name">WELCOME TO VIRTUAL CRIPTO</div>
      <div class="text">Your virtual wallet where you can buy and sell currencies.</div>
      <form class="p-3 mt-3">
        <div class="form-field d-flex align-items-center">
          <span class="far fa-user"></span>
          <input
            type="text"
            name="idUsuario"
            v-model="idUser"
            id="idUsuario"
            placeholder="Insert your ID"
          />
        </div>
        <button class="btn mt-3" @click="enter">LOGIN</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      idUser: "",
    };
  },
  methods: {
    enter() {
      if (this.idUser.trim() === "") {
        this.$toast.error("Error! The field must not be empty.");
      } else {
        if (this.idUser.length > 10) {
          this.$toast.error("Error! User ID must not contain more than 10 characters.");
        } else {
          this.$store.commit("modificarIdUsuario", this.idUser);
          this.$store.commit("cargarTransacciones");
          this.$router.push("/transactions");
        }
      }
    },
  },
};
</script>
<style scoped>
.wrapper {
  max-width: 475px;
  min-height: 300px;
  margin: 80px auto;
  padding: 40px 30px 30px 30px;
  background-color: #a6d7fd;
  opacity: 0.8;
  border-radius: 40px;
}
.wrapper .name {
  font-weight: bold;
  font-size: 25px;
  padding-left: 10px;
  color: #090274;
  padding: 10px;
}
.wrapper .text {
  margin-bottom: 40px;
  font-size: 13px;
}
.wrapper .form-field input {
  width: 100%;
  text-align: center;
  display: block;
  border: none;
  outline: none;
  background: none;
  font-size: 1.2rem;
  color: #666;
  padding: 8px 10px 10px 0px;
}
.wrapper .form-field {
  width: 80%;
  text-align: center;
  align-content: center;
  padding-left: 10px;
  margin-bottom: 20px;
  border-bottom: solid 2px #090274;
  margin-left: 45px;
}
.wrapper .btn {
  font-weight: 500;
  font-size: 18px;
  margin-top: 10px;
  letter-spacing: 1.5px;
  width: 40%;
  height: 50px;
  background-color: #090274;
  color: #fff;
  border-radius: 40px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}
.wrapper .btn:hover {
  background-color: #fefefe;
  color: #090274;
  font-weight: 600;
}
.wrapper a {
  text-decoration: none;
  font-size: 0.8rem;
  color: #03a9f4;
}
.wrapper a:hover {
  color: #039be5;
}
@media (max-width: 380px) {
  .wrapper {
    margin: 30px 20px;
    padding: 40px 15px 15px 15px;
  }
}
</style>
