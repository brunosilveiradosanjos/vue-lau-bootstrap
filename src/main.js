import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery;
import 'popper.js'
import '../public/scss/app.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
