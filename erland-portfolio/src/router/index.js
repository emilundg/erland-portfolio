import Vue from 'vue';
import Router from 'vue-router';

import Main from '../components/Main.vue';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [{
      path: '',
      component: Main
    },
    {
      path: '*',
      component: Main
    },
  ]
});

export default router;