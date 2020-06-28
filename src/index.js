import Vue from 'vue';
import App from './App.vue';
import router from './router'
import echarts from 'echarts';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import carto from '@carto/carto.js';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import {
	ajax,
} from './libs/axios';

Vue.prototype.$echarts = echarts;
Vue.prototype.L = leaflet;
Vue.prototype.$carto = carto;
Vue.use(ElementUI);
// const root = document.createElement('div');
// document.body.appendChild(root);
Vue.$httpRequestList = [];
new Vue({
	router,
	ajax,
	render: (h) => h(App)
}).$mount('#app')