<template>
	<div>
		<p><span>数组a=</span>{{arr}}</p>
		<p><span>数组b=</span>{{arr2}}</p>
		<div style="color: blue; fontSize: 21px">
			方法1：Math.max(...a) ------ 9;
			方法2：Math.max.apply(this,a) -----9;

			方法1可以求两个数组的最大值
			Math.max(...a,...b); ------10
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			arr: [1, 3, 5, 7, 9],
			arr2: [2, 4, 6, 8, 10]
		}
	},
	created () {
		this.getResult();
	},
	methods: {
		getResult () {
			console.log('方法1:', Math.max(...this.arr));
			console.log('方法2:', Math.max.apply(this, this.arr));
			console.log('两个数组最大', Math.max(...this.arr, ...this.arr2));
		}
	},
}
</script>
<style>
</style>