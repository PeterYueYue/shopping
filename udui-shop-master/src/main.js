import Vue 	  from 'vue'
import store  from './vuex/store'
import router from './router/routerConfig'
import filter from './filter/filter'

Vue.config.productionTip = true

import infiniteScroll   from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

new Vue({
  el: '#app',
  router:router.router,
  store
}).$mount('#app')
