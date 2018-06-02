<template>
  <div class="index">
    <mt-header title="Fishsocks">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="usermoney"><a @click="pay">余额：{{leftmoney}}元</a></div>
    <div class="showdata">余{{left}}/<span>共{{total}}</span></div>
    <ul class="showinfo">
      <li>IP(server)：<span>{{server}}</span></li>
      <li>端口(port)：<span>{{port}}</span></li>
      <li>状态(status)：<span>{{status}}</span></li>
      <li>密码(password)：<span>{{password}}</span></li>
    </ul>
    <!-- <div class="changepassword">>>点击修改默认密码</div> -->
    <div class="saveimg">
      <img class="qrcode" :src="qrcodeimg">
      <mt-button type="primary">保存二维码到手机</mt-button>
    </div>
    <div class="ssdownload">影梭下载链接：<a href="https://itunes.apple.com/cn/app/ssrconnectpro/id1272045249?mt=8" download="IOS端">IOS端</a> <a href="https://itunes.apple.com/cn/app/ssrconnectpro/id1272045249?mt=8" download="安卓端">安卓端</a></div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui'
import qrcodeimg from '../assets/mmqrcode.png'
Vue.component(Header.name, Header)
export default {
  name: 'Index',
  data () {
    return {
      leftmoney: '20',
      left: '50G',
      total: '50G',
      server: '207.246.91.225',
      port: '9001',
      status: '正使用',
      password: 'yangyanping',
      qrcodeimg: qrcodeimg
    }
  },
  methods: {
    pay: function () {
      this.$router.push({ path: 'pay' })
    },
    getData () {
      // let _this = this
      this.axios.get('v1/index').then(function (response) {
        // MessageBox('提示', response.data.message)
        // _this.$router.push({ path: 'index' })
        console.log(response)
      }).catch(function (error) {
        // MessageBox('提示', error)
        console.log(error)
      })
    }
  },
  mounted: function () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
body {
  margin: 0px;
}
a{
  text-decoration: none;
  color: #000;
}
.usermoney{
  float: right;
  padding: 20px 20px 0px 20px;
}
.showdata {
  clear: both;
  width: 70%;
  margin: auto;
  text-align: center;
  font-size: 40px;
  padding: 15px 0px 25px 0px;
}
.showdata span{
  font-size: 25px;
}
.showinfo {
  padding: 0px;
  width: 85%;
  margin: auto;
  border: 1px solid #eee;
  border-radius: 10px;
  text-align: left;
  background-color: #F4F5F7;
}
.showinfo li{
  list-style: none;
  margin: 15px;
  font-weight: bold;
}
.showinfo li span{
  font-weight: normal;
}
/*.changepassword{
  padding-left: 10%;
}*/
.saveimg{
  margin: 20px auto;
  width: 70%;
  text-align: center;
}
.qrcode{
  width: 50%;
  margin: 0 auto;
}
.ssdownload{
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 20px;
}
</style>
