<template>
  <div class="pay">
    <mt-header title="Fishsocks">
      <mt-button icon="back" slot="left" @click.native="backIndex"></mt-button>
    </mt-header>
    <h1>缴费明细</h1>
    <table>
      <thead>
        <td>日期</td>
        <td>缴费方式</td>
        <td>金钱</td>
      </thead>
      <tr v-for="(item, key) in items" :key="key">
        <td>{{item.date}}</td>
        <td>{{item.style}}</td>
        <td>{{item.money}}</td>
      </tr>
    </table>
    <footer><mt-button type="primary" size="small" @click.native="ticket">查看代金券</mt-button></footer>
  </div>
</template>

<script>
// import Vue from 'vue'
export default {
  data () {
    return {
      items: [
        { date: '2018-03-04', style: '微信', money: 3253 },
        { date: '2018-05-06', style: '支付宝', money: 76 },
        { date: '2018-06-04', style: '微信', money: 2 },
        { date: '2018-07-04', style: '代金券', money: 3 },
        { date: '2018-08-04', style: '代金券', money: 33 }
      ]
    }
  },
  methods: {
    backIndex: function () {
      this.$router.push({ path: 'index' })
    },
    ticket: function () {
      this.$router.push({ path: 'ticket' })
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
.pay{
  text-align: center;
}
table{
  margin: 0 auto;
}
table thead{
  font-weight: bolder;
}
table td{
  padding: 8px;
  border: 1px solid #ddd;
}
footer{
  position: fixed;
  bottom: 20px;
  left: -50%;
  right: -50%;
}
</style>
