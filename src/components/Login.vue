<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <br /><br />
    <!-- <mt-field label="账号" state="success" placeholder="请输入手机号" type="tel" v-model="username"></mt-field> -->
    <mt-field label="账号" placeholder="请输入手机号" type="tel" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <br /><br />
    <mt-button type="primary" size="large" @click.native="login">登录</mt-button><br />
    <mt-button type="default" size="large" @click.native="register">注册</mt-button>
    <p class="footer">© Ss-System Wong&Young</p>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button, Field } from 'mint-ui'
Vue.component(Field.name, Field)
Vue.component(Button.name, Button)
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Ss-System',
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      let _this = this
      this.axios.post('auth/login', {
        phone: _this.username,
        password: _this.password
      }).then(function (response) {
        localStorage.token = response.data
        _this.$router.push({ path: 'index' })
      }).catch(function (error) {
        console.log(error)
      })
    },
    register: function () {
      this.$router.push({ path: 'register' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
.mint-cell-wrapper{
  background-origin: border-box;
  background-image:-webkit-gradient(linear, left bottom, left top, from(#dbdbdb), color-stop(100%, #dbdbdb), color-stop(100%, #0000006b));
  background-image: linear-gradient(0deg, #dbdbdb, #dbdbdb 100%, #0000006b 100%);
  background-position: bottom left;
}
.mint-field .mint-cell-title{
  width: auto;
  margin-right: 20px;
}
.footer{
  position: fixed;
  bottom: 10px;
  left: -50%;
  right: -50%;
}
.login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 15px;
  margin-top: 80px;
}
</style>
