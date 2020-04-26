import Vue from 'vue';
import App from './App.vue';
import router from './router'
import echarts from 'echarts';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {
  ajax,
} from './libs/axios'

Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
// const root = document.createElement('div');
// document.body.appendChild(root);
Vue.$httpRequestList = [];
new Vue({
  router,
  ajax,
  render: (h) => h(App)
}).$mount('#app')