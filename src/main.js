import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'jquery'
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery;
import 'popper.js'
import '../public/scss/app.scss'
import 'animate.css'
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();
// window.__forceSmoothScrollPolyfill__ = true;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
