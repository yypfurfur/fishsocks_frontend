<template>
  <div class="pay">
    <h1>缴费明细</h1>
    <table>
      <thead>
        <td>日期</td>
        <td>缴费IP</td>
        <td>代金券</td>
        <td>金额</td>
        <td>付款状态</td>
      </thead>
      <tr v-for="(item, key) in response" :key="key" :id="getId(key, response)">
        <td>{{item.ip}}：{{item.port}}</td>
        <td>{{item.created_at}}</td>
        <td v-if="item.coupon_type===1">{{item.coupon_amount}}元</td>
        <td v-if="item.coupon_type===2">{{item.coupon_amount}}折</td>
        <td>{{payType[item.type-1]}}{{item.amount}}元</td>
        <td>{{payStatus[item.status + 1]}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
// import Vue from 'vue'
export default {
  data () {
    return {
      response: [{
        id: '',
        type: '',
        amount: '',
        created_at: ''
      }],
      payType: ['微信：', '支付宝:', '现金:'],
      payStatus: ['已取消', '待缴费', '成功']
    }
  },
  methods: {
    getPayData () {
      let _this = this
      this.axios.get('v1/getPayment').then(function (response) {
        _this.response = response.data
        console.log(response)
      }).catch(function (error) {
        // MessageBox('提示', error.message)
        console.log(error)
      })
    },
    getId (index, response) {
      return response[index].id
    }
  },
  mounted: function () {
    this.getPayData()
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
</style>
