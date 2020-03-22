<template>
	<div id="test">
    <router-view></router-view>
  </div>
</template>

<script>
	export default {
		data(){
			return {
				text : 'abc'
			}
		}
	}
</script>

<style>
	#test{
		color : red;
	}
</style>