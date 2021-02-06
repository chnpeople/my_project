/* eslint-disable no-console */
export default {
  bind: (el, binding, vnode) => {
    window.root = document.getElementById('test');
    window.console.log(root);
    window.console.log(el.parentNode, binding, vnode);
  },

  inserted: (el, binding, vnode) => {
    window.root = document.getElementById('test');
    window.console.log(root);
    window.console.log(el, binding, vnode);
    window.parentNode = undefined;
    window.parentNode = el.parentNode;

    console.log(window.parentNode);
    if (!binding.value) {
      el.parentNode.removeChild(el);
    }else {
      parentNode.appendChild(el);
    }
  },

  update: (el, binding, vnode,oldVnode) => {
    window.console.log(el, binding, vnode,oldVnode);
    console.log(window.parentNode);
    if (!binding.value) {
      el.parentNode.removeChild(el);
    }else {
      window.parentNode.appendChild(el);
    }
  },

  unbind: (el, binding, vnode) => {
    window.console.log(el, binding, vnode);
  },
};
