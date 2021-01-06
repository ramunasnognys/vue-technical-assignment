import Vue from 'vue'
import App from './App.vue'
import { router } from './routes'
import { store } from './store/store.js'
import Table from './components/Table.vue'

Vue.config.productionTip = false
Vue.component('app-table', Table)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
