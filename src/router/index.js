import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import BlogPost from '../views/BlogPost.vue';
// import PageNotFound from '../views/PageNotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/posts/:title',
    name: 'BlogPosts',
    component: BlogPost,
    props: true,
    // beforeEnter(to, from, next) {
    //     const isValidId = Number.isInteger(Number(to.params.id));
    //     next(isValidId);
  },
  {
    path: '*',
    component: () => import('../views/PageNotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
