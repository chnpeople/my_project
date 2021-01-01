<template>
  <div>
    <el-button @click="openToast">点击打开Toast</el-button>
    <el-button @click="openNpmToast">点击打开npm-Toast</el-button>
    <el-button @click="openPlugin">index.js定义的plugin</el-button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        openToast() {
            this.$mytoast('哈哈1111111111');
        },
        openNpmToast() {
            this.$toast('npmnpmnpm');
        },
        openPlugin() {
            this.$myTest();
        }
    },
}
</script>

<style>

</style>