import Vue from 'vue';
import Meta from 'vue-meta';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Meta);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => {
        console.log('Successfully created worker');
      })
      .catch((err) => {
        console.log('Failed to create worker', err);
      });
  });
}
