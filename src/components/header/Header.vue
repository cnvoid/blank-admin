<template>
  <div class="">
    <div class="logo inline-block">
      <img src="./../../assets/img/logo.png" alt="">
    </div>
    <div class="inline-block">后台管理系统</div>
    <div class="abs user">
      用户名: <i>Steven</i> <a href=""><i class="fa fa-sign-out"></i> 退出</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  .logo{
    display: inline-block;
  }
  .user{
    right: 30px;
    top: 0;
    color: cornflowerblue;
  }

</style>