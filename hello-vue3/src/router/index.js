import { createRouter, createWebHistory } from 'vue-router';
import Start from '../views/Start.vue';
import Home from '../views/Home.vue';
import Gallery from '../views/Gallery.vue';

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Start',
    },
  },
  {
    path: '/start',
    name: 'Start',
    component: Start,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
