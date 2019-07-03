import Vue from 'vue';
import Router from 'vue-router';

//container
import Full from './container/Full.vue'

//views
const ReferralSystem = () => import('./views/ReferralSystem.vue')

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Full',
      component: Full,
      redirect: '/referral-system',
      children: [
        {
          path: '/referral-system',
          name: 'ReferralSystem',
          component: ReferralSystem,
        },
      ]
    },
  ],
});
