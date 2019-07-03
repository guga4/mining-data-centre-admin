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
          path: '/dashboard',
          name: 'Dashboard',
          component: Full,
        },
        {
          path: '/profile',
          name: 'Profile',
          component: Full,
        },
        {
          path: '/current-debt',
          name: 'CurrentDept',
          component: Full,
        },
        {
          path: '/transactions-history',
          name: 'TransactionsHistory',
          component: Full,
        },
        {
          path: '/miners-info',
          name: 'MinersInfo',
          component: Full,
        },
        {
          path: '/referral-system',
          name: 'ReferralSystem',
          component: ReferralSystem,
        },
        {
          path: '/agreement',
          name: 'Agreement',
          component: Full,
        },
      ]
    },
  ],
});
