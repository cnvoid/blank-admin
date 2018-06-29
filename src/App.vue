<style lang="">
  .page-header {
    height: 40px !important;
    width: 100%;
    background: #001616;
    color: #ccc;
    position: fixed;
    top: 0;
    line-height: 40px;
    z-index: 6000;
  }

  .page-aside {
    position: fixed;
    left: 0;
    top: 40px;
    width: 220px !important;
    height: calc(100% - 40px);
    background: #324157;
    color: #ccc;
  }

  .page-main {
    background: #fff;
    margin: 30px 0 0 220px !important;
    overflow: scroll;
  }

</style>

<template>
  <div>
    <el-container>
      <el-header class="page-header">
        <Header></Header>
      </el-header>
      <el-aside class="page-aside">
        <Nav></Nav>
      </el-aside>
      <el-main class="page-main">
        <Breadcrumb></Breadcrumb>

        <router-view class="view"></router-view>

      </el-main>
    </el-container>
  </div>

</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import Header from './components/header/Header'
  import Nav from './components/nav/Nav-menu'
  import Breadcrumb from './components/nav/Breadcrumb'

  export default {
    name: 'App',
    components: {
      HelloWorld, Header, Nav, Breadcrumb
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
