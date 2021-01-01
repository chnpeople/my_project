import Vue from 'vue';
import Toast from './Toast.vue';

const ToastConstructor = Vue.extend(Toast);

function showToast(text, time=2000) {
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data() {
      return {
        show: true,
        text: text,
      };
    },
  });

  document.body.appendChild(toastDom.$el);

  setTimeout(() => {
    toastDom.show = false;
  }, time);
}

function toastRegistry() {
  Vue.prototype.$mytoast = showToast;
}

export default toastRegistry;