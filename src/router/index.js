import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld2,
      breadcrumbs: [
        {
          name: '首页',
          route: '/',
        },
        {
          name: '哈喽',
          route: '/hello',
        },
      ],
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      breadcrumbs: [
        {
          name: '首页',
          to: '/',
        },
        {
          name: '哈喽222',
          to: '/hello',
        },
      ],
    },
  ],
});
