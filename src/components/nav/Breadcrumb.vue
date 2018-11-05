<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="crumb">
    <el-breadcrumb-item v-for="item in breadcrumbs" :key="item" :to="{path: item.to}">{{item.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import routeConfig from '@/router/index'
let routes = routeConfig.options.routes
export default {
  name: 'Breadcrumb',
  data() {
    return {
      breadcrumbs: [{
        name: '首页',
        route: '/'
      }]
    }
  },
  watch: {
    '$route': 'updateCrumb'
  },
  methods: {
    updateCrumb: function() {
      for (let item of routes){
        if (item.path === this.$route.path) {
          this.breadcrumbs = item.breadcrumbs
        }
      }
    }
  }
}
</script>

<style lang="stylus">
  .crumb{
    line-height: 30px;
  }

</style>