<template>
	<div>
		<el-container>
			<el-container>
				<el-aside width="200px">
					<el-menu
						default-active="1-1"
						class="el-menu-vertical-demo"
						background-color="#545c64"
						text-color="#fff"
						active-text-color="#ffd04b"
						@select="getIndex"
						style="height: 800px"
					>
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>项目</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="1-1">表格嵌套表单</el-menu-item>
								<el-menu-item @click="$router.push('/keepalive')">keepAlive</el-menu-item>
								<el-menu-item index="1-2">AES加密</el-menu-item>
								<el-menu-item index="1-3">中断axios</el-menu-item>
								<el-menu-item index="1-4">echarts</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-main>
					<change v-if="index === '1-1'"></change>
					<selected v-if="index === '1-1'"></selected>
					<aes v-if="index === '1-2'"></aes>
					<cancelAjax v-if="index === '1-3'" />
					<echarts v-if="index === '1-4'" />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import change from '../components/change.vue';
import selected from '../components/selected.vue';
import aes from '../components/aes.vue';
import cancelAjax from '../components/cancelAjax.vue';
import echarts from '../components/echarts.vue';

// const change = () => import('../components/change.vue');
// const selected = () => import('../components/selected.vue');
// const aes = () => import('../components/aes.vue');
// const cancelAjax = () => import('../components/cancelAjax.vue');
// const echarts = () => import('../components/echarts.vue');

export default {
	data () {
		return {
			index: '1-1',
		}
	},
	components: {
		change, selected, aes, cancelAjax, echarts
	},
	methods: {
		getIndex (index) {
			console.log(index);
			this.index = index;
		}
	},

}
</script>

<style>
</style>