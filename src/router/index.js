import Vue from 'vue';
import VueRouter from 'vue-router';
import { clearHttpRequestingList } from '../libs/axios';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/change',
    component: () => import('../views/home.vue'),
    meta: {
      keepAlive: false,
    },
    children: [
      {
        path: '/home/change',
        name: 'change',
        component: () => import('../components/change.vue'),
      },
      {
        path: '/home/selected',
        name: 'selected',
        component: () => import('../components/selected.vue'),
      },
      {
        path: '/home/aes',
        name: 'aes',
        component: () => import('../components/aes.vue'),
      },
      {
        path: '/home/cancelAjax',
        name: 'cancelAjax',
        component: () => import('../components/cancelAjax.vue'),
      },
      {
        path: '/home/echarts',
        name: 'echarts',
        component: () => import('../components/echarts.vue'),
      },
      {
        path: '/home/getBigNum',
        name: 'getBigNum',
        component: () => import('../components/getBigNum.vue'),
      },
      {
        path: '/home/treeTable',
        name: 'treeTable',
        component: () => import('../components/treeTable.vue'),
      },
      {
        path: '/home/addNew',
        name: 'addNew',
        component: () => import('../components/addNew.vue'),
      },
      {
        path: '/home/upload',
        name: 'upload',
        component: () => import('../components/upload.vue'),
      },
      {
        path: '/home/gdMap',
        name: 'gdMap',
        component: () => import('../components/gdMap.vue'),
      },
      {
        path: '/home/upload2',
        name: 'upload2',
        component: () => import('../components/upload2.vue'),
      },
      {
        path: '/home/myTable',
        name: 'myTable',
        component: () => import('../components/myTable.vue'),
      },
      {
        path: '/home/extendTest',
        name: 'extendTest',
        component: () => import('../components/extendTest.vue'),
      },
      {
        path: '/home/office',
        name: 'office',
        component: () => import('../components/office.vue'),
      },
      {
        path: '/home/quill',
        name: 'quill',
        component: () => import('../components/quill.vue'),
      },
      {
        path: '/home/scoll',
        name: 'scoll',
        component: () => import('../components/scoll.vue'),
      },
      {
        path: '/home/directive',
        name: 'directive',
        component: () => import('../components/directive.vue'),
      },
      {
        path: '/home/elselect',
        name: 'elselect',
        component: () => import('../components/elselect.vue'),
      },
      {
        path: '/home/tooltip',
        name: 'tooltip',
        component: () => import('../components/tooltip.vue'),
      },
    ],
  },
  {
    path: '/keepalive',
    name: 'KeepAlive',
    component: () => import('../views/keepAlive.vue'),
    meta: {
      keepAlive: true,
    },
  },
];

const router = new VueRouter({
  // mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  clearHttpRequestingList();
  next();
});

export default router;
