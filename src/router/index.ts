import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/views/checkout.vue'),
    },
  ],
});

export default router;
