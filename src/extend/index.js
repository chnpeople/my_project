import Vue from 'vue';
import Toast from './Toast.vue';

const ToastConstructor = Vue.extend(Toast);

function showToast(text) {
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
  }, 2000);
}

function toastRegistry() {
  Vue.prototype.$mytoast = showToast;
}

export default toastRegistry;