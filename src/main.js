import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'popper.js'
import '../public/scss/app.scss'
import 'animate.css'
import smoothscroll from 'smoothscroll-polyfill';
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'

smoothscroll.polyfill();
// window.__forceSmoothScrollPolyfill__ = true;

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
}).$mount('#app')
