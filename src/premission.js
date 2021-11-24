import VueRouter from 'vue-router';
import { ajax } from './libs/axios';
function install(Vue, router) {
  let routesList = router.router.options.routes;
  Vue.prototype.$auth = async (fn) => {
    let list = await queryList(routesList);
    list = flattenTree(list,'views');
    // eslint-disable-next-line no-console
    console.log('list', list);
    router.router.matcher = new VueRouter().matcher;
    router.router.options.routes = list;
    // eslint-disable-next-line no-console
    console.log(router);
    router.router.addRoutes(list);
    fn();
  };
}

function queryList(routesList) {
  return new Promise((resolve) => {
    ajax({
      methods: 'get',
      uri: '/menu',
      successCallback: (res) => {
        let list = JSON.parse(res.data);
        // eslint-disable-next-line no-console
        console.log(list);
        resolve([...routesList, ...list]);
      },
    });
  });
}

function flattenTree(list, views) {
  list.forEach((item) => {
    //动态路由控制37是否注释
    item.component = () => import(`@/${views}/${item.name}.vue`);
    if (item.children && item.children.length > 0) {
      flattenTree(item.children, 'components');
    }
  });
  return list;
}

const loadView = (view) => {
  // return (resolve) => require([`@/views/${view}.vue`], resolve)
};

export default { install };
