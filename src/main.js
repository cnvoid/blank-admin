// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/reset.css';
import './assets/style/font-icon/font-awesome.min.css';
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)
import VueRouter from 'vue-router'

Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
