import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import AppMobile from './AppMobile.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/element-variables.scss';
import { ajax } from './libs/axios';
import './assets/css/default.css';
import VueAMap from 'vue-amap';
import Toast from './extend/index'; //项目自定义的组件
import myToast from 'chntoast'; // npm包组件
// import v_open from './directives/open'; //全局指令
import v_has from 'vue-v-has';
import store from './store/index';
import routerAuth from './premission';
//微前端
import { registerMicroApps, start } from 'qiankun';
import rem from './utils/rem';

registerMicroApps([
  {
    name: 'subApp', // app name registered
    entry: '//www.tim007.xyz/sub',
    container: '#sub',
    activeRule: '/#/home/sub',
  },
]);

start();

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _dom = require('element-ui/lib/utils/dom');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var nodeList = [];
var ctx = '@@clickoutsideContext';

var startClick = void 0;
var seed = 0;

!_vue2.default.prototype.$isServer &&
  (0, _dom.on)(document, 'mousedown', function(e) {
    return (startClick = e);
  });

!_vue2.default.prototype.$isServer &&
  (0, _dom.on)(document, 'mouseup', function(e) {
    nodeList.forEach(function(node) {
      return node[ctx].documentHandler(e, startClick);
    });
  });

function createDocumentHandler(el, binding, vnode) {
  return function() {
    var mouseup =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var mousedown =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (
      !vnode ||
      !vnode.context ||
      !mouseup.target ||
      !mousedown.target ||
      el.contains(mouseup.target) ||
      el.contains(mousedown.target) ||
      el === mouseup.target ||
      (vnode.context.popperElm &&
        (vnode.context.popperElm.contains(mouseup.target) ||
          vnode.context.popperElm.contains(mousedown.target)))
    )
      return;

    if (
      binding.expression &&
      el[ctx].methodName &&
      vnode.context[el[ctx].methodName]
    ) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}

Vue.directive('clickoutside', {
  bind: function bind(el, binding, vnode) {
    nodeList.push(el);
    var id = seed++;
    el[ctx] = {
      id: id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value,
    };
  },
  update: function update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },
  unbind: function unbind(el) {
    var len = nodeList.length;

    for (var i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  },
});

Vue.use(v_has);
Vue.use(Toast);
Vue.use(myToast);
Vue.use(VueAMap);
Vue.use(routerAuth, { router });
const plugin = {
  install() {
    function Test() {
      window.console.log('你好啊！');
    }
    Vue.prototype.$myTest = Test;
  },
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

//全局指令
// Vue.directive('open',v_open);
let isPC = true;
if (
  navigator.userAgent.match(
    /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
  )
) {
  // eslint-disable-next-line no-console
  isPC = false;
}

const app = new Vue({
  router,
  ajax,
  store,
  myOption: '不要看我的控制台',
  render: (h) => isPC ? h(App) : h(AppMobile),
});
app.$mount('#app');
//动态添加路由后再渲染app
// router.onReady(() => {
//   Vue.prototype.$auth(() => {
//     app.$mount('#app');
//   });
// });
