import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(router)
Vue.use(ElementUI)
//Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
 /* components: { App },
  template: '<App/>'*/
})
