import Vue from 'vue'
import VueRouter from 'vue-router'
import {
	clearHttpRequestingList
} from '../libs/axios'
Vue.use(VueRouter)

import home from '../views/home.vue';
import KeepAlive from '../views/keepAlive.vue';

const routes = [{
	path: '/',
	name: 'home',
	component: home,
	meta: {
		keepAlive: false
	}
}, {
	path: '/keepalive',
	name: 'KeepAlive',
	component: KeepAlive,
	meta: {
		keepAlive: true
	}
}]


const router = new VueRouter({
	routes
});


router.beforeEach((to, from, next) => {
	clearHttpRequestingList();
	next();
})

export default router;