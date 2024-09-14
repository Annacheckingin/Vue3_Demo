import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import IndexPage from '../components/IndexPage.vue';
const routes = [
  {
    path: '/homePage',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/index',
    name: 'index',
    component: IndexPage,
  },
  {
    path: '/',
    redirect: '/index',
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;