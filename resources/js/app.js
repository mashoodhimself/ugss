
require('./bootstrap');

import Vue from 'vue';
import App from './layouts/App.vue';
import MainComponent from './components/MainComponent.vue';
import router from './router';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');



// import VueRouter from 'vue-router';

// window.Vue = require('vue').default;

// import LoginComponent from "./components/LoginComponent.vue";

// Vue.component('app-component', require('./components/AppComponent.vue').default);


// Vue.use(VueRouter);

// // Define routes
// const routes = [
//     { path: '/login', component: LoginComponent },
//     { path: '/app', component: require('./components/AppComponent.vue').default }
// ];

// // Create the router instance and pass the routes option
// const router = new VueRouter({
//     routes // short for `routes: routes`
// });

// const app = new Vue({
//     el: '#app',
//     router,

// });
