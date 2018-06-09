<template>
  <div class="index">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="(s, key) in response.ss" :key="key">
        <div v-if="s.status == 1" class="showdata">余{{s.left_flow}}MB/<span>共{{s.total_flow}}MB</span></div>
        <div class="payBtn"><mt-button type="primary" size="small">充值</mt-button></div>
        <ul class="showinfo">
          <li>IP(server)：<span>{{s.ip}}</span></li>
          <li>端口(port)：<span>{{s.port}}</span></li>
          <li>状态(status)：<span v-if="s.status == 1" style="color:green">有效</span><span v-else style="color:grey">已停用</span></li>
          <li>密码(password)：<span>{{s.password}}</span></li>
        </ul>
        <div class="saveimg">
          <img class="qrcode" :src="qrcodeimg">
          <mt-button type="primary">保存二维码到手机</mt-button>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <div class="ssdownload">影梭下载链接：<a href="https://itunes.apple.com/cn/app/ssrconnectpro/id1272045249?mt=8" download="IOS端">IOS端</a> <a href="https://itunes.apple.com/cn/app/ssrconnectpro/id1272045249?mt=8" download="安卓端">安卓端</a></div>
  </div>
</template>

<script>
import Vue from 'vue'
import {Header, MessageBox, Swipe, SwipeItem, Button} from 'mint-ui'
import qrcodeimg from '../assets/mmqrcode.png'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
export default {
  name: 'Index',
  data () {
    return {
      response: {
        ss: [{
          ip: '',
          left_flow: 0,
          total_flow: 0,
          password: '',
          port: 0,
          status: 0
        }]
      },
      qrcodeimg
    }
  },
  methods: {
    getData () {
      let _this = this
      this.axios.get('v1/index').then(function (response) {
        _this.response = response.data
        console.log(response)
      }).catch(function (error) {
        MessageBox('提示', error.message)
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
.mint-swipe{
  width: 100%;
  height: 530px;
}
.mint-swipe-indicator{
  opacity: 0.3;
  background: #666;
}
.mint-swipe-indicator.is-active{
  background: #26a2ff;
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
  margin: 5px auto;
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
.payBtn{
  margin: 0 auto;
  width: 15%;
  left: -50%;
  right: -50%;
}
</style>
