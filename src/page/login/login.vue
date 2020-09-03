<template>
<body>
  <div class="login">
    <h1>dalidali</h1>
    <div class="form">
      <div class="item">
        <i class="fa fa-user-circle" aria-hidden="true"></i>
        <input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号" />
      </div>
      <div class="item">
        <i class="fa fa-key" aria-hidden="true"></i>
        <input type="text" v-model="loginForm.password" auto-complete="off" placeholder="密码" />
      </div>
    </div>
    <button value="Login" @click="login">登录</button>
  </div>
</body>
</template>
 
 
<script>
import {store} from '@/router/index.js'
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        account: "",
        password: "",
      },
      responseResult: [],
    };
  },
  methods: {
    login: function () {
      this.$axios
        .post(this.USER_URL + "login", this.loginForm)
        .then((res) => {
          res = res.data;
          let user = JSON.stringify(res.data);
          store.commit("setUser",user)
          localStorage.setItem("userData",user);
          this.$message({
          message: '欢迎“'+res.data.username+'”访问dalidali',
          type: 'success'
        });
          this.$router.push("/");
        })
        .catch((err) => {
          console.error(err.data);
        });
    },
  },
};
</script>
 
<style scoped>
*{
  margin:0;
  padding: 0;
}
body {
  z-index: -1;
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(~@/assets/login.jpg);
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.login {
  padding: 20px 50px;
  background: #00000060;
  width: 30%;
  height: auto;
  margin: 0 auto;
  margin-top: 15%;
  text-align: center;
}
.login h1 {
  color: #fff;
}
.login .form .item {
  margin-top: 15px;
}
.login .form .item input {
  width: 200px;
  font-size: 15px;
  padding: 5px 10px;
  background: #ffffff00;
  border: 0px;
  border-bottom: 2px solid #fff;
  color: #fff;
}
.login button {
  margin-top: 50px;
  width: 200px;
  height: 30px;
  border: 0px;
  background: #ffffff80;
  background-image: linear-gradient(120deg, #db3125 0%, #578bc3 100%);
  border-radius: 15px;
}
</style>