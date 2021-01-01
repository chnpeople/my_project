import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/element-variables.scss';
import { ajax } from './libs/axios';
import './assets/css/default.css';
import VueAMap from 'vue-amap';
import  Toast from './extend/index';  //项目自定义的组件
import myToast from 'chntoast';      // npm包组件
Vue.use(Toast);
Vue.use(myToast);
Vue.use(VueAMap);

const plugin = {
  install() {
    function Test() {
      window.console.log('你好啊！');
    }
    Vue.prototype.$myTest = Test;
  }
};

Vue.use(plugin);

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  key: '45dd1f5794b91546305683568861cd94',
});
Vue.use(ElementUI);
// const root = document.createElement('div');
// document.body.appendChild(root);
Vue.$httpRequestList = [];

Vue.mixin({
  created() {
    const myOption = this.$options.myOption;
    if (myOption) {
      // eslint-disable-next-line no-console
      console.log(myOption);
    }
  },
});

new Vue({
  router,
  ajax,
  myOption: '不要看我的控制台',
  render: (h) => h(App),
}).$mount('#app');

