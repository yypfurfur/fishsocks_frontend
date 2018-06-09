<template>
  <div class="ticket">
    <h1>缴费</h1>
    <ul id="myticket">
      <!-- <li v-for="item in items">{{item}}</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  // data () {
  //   return {
  //     leftmoney: '20',
  //     left: '50G',
  //     total: '50G',
  //     server: '207.246.91.225',
  //     port: '9001',
  //     status: '正使用',
  //     password: 'yangyanping',
  //     qrcodeimg: qrcodeimg
  //   }
  // },
  methods: {
    backPay: function () {
      this.$router.push({ path: 'pay' })
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
.ticket{
  text-align: center;
}
</style>
