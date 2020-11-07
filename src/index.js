import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { ajax } from "./libs/axios";
import "./assets/css/default.css";

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
  myOption: "不要看我的控制台",
  render: (h) => h(App),
}).$mount("#app");
