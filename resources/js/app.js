require('./bootstrap');

import Vue from 'vue'
import App from './vue/app'

window.Vue = require('vue');





import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue') },
    { path: '/profile', component: require('./components/Profile.vue') }
  ] 

const router = new VueRouter({
    routes
  })







Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    router
});
