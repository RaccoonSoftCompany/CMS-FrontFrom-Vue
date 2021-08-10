import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import axios from 'axios'
import { MessageBox } from "element-ui";


Vue.prototype.$axios = axios;

Vue.prototype.$confirm = MessageBox.confirm
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component(CollapseTransition.name, CollapseTransition)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
