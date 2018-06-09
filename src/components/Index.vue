<template>
  <div class="page-tabbar">
    <mt-header title="Fishsocks"></mt-header>
    <div class="page-wrap">
    <!-- tabcontainer -->
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="详情">
          <fish-total></fish-total>
        </mt-tab-container-item>
        <mt-tab-container-item id="明细">
          <fish-pay-detail></fish-pay-detail>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          我的
       <!--    <router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link> -->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="详情">
        <!-- <img slot="icon" src="../assets/logo.png">   -->
        详情
      </mt-tab-item>
      <mt-tab-item id="明细">
        <!-- <img slot="icon" src="../assets/logo.png">   -->
        明细表
      </mt-tab-item>
      <mt-tab-item id="我的">
        <!-- <img slot="icon" src="../assets/logo.png">   -->
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header, Swipe, SwipeItem, Tabbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
import FishTotal from '@/components/Total'
import FishPayDetail from '@/components/PayDetail'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
export default {
  name: 'Index',
  components: {
    FishTotal,
    FishPayDetail
  },
  data () {
    return {
      selected: '详情'
    }
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
</style>
