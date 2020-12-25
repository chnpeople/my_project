<template>
    <el-container style="height: 100%">
      <el-aside width="250px">
        <el-menu default-active="1-1"
                 class="el-menu-vertical-demo my-el-menu"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 @select="getIndex"
                 style="height: 800px">
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
              <el-menu-item index="1-5">取数组最大值</el-menu-item>
              <el-menu-item index="1-6">树形表格下拉(每次只展开一个)</el-menu-item>
              <el-menu-item index="1-7">火星登机牌</el-menu-item>
              <el-menu-item index="1-8">文件上传(base64)</el-menu-item>
              <el-menu-item index="1-9">高德地图</el-menu-item>
              <el-menu-item index="1-10">文件上传下载(二进制流)</el-menu-item>
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
        <getBigNum v-if="index === '1-5'" />
        <treeTable v-if="index === '1-6'" />
        <addNew v-if="index === '1-7'" />
        <upload v-if="index === '1-8'" />
        <gdMap v-if="index === '1-9'" />
        <upload2 v-if="index === '1-10'" />
      </el-main>
    </el-container>
</template>

<script>
// import change from '../components/change.vue';
// import selected from '../components/selected.vue';
// import aes from '../components/aes.vue';
// import cancelAjax from '../components/cancelAjax.vue';
// import echarts from '../components/echarts.vue';

export default {
  data() {
    return {
      index: '1-1',
    };
  },
  components: {
    change: () => import('../components/change.vue'),
    selected: () => import('../components/selected.vue'),
    aes: () => import('../components/aes.vue'),
    cancelAjax: () => import('../components/cancelAjax.vue'),
    echarts: () => import('../components/echarts.vue'),
    getBigNum: () => import('../components/getBigNum.vue'),
    treeTable: () => import('../components/treeTable.vue'),
    addNew: () => import('../components/addNew.vue'),
    upload: () => import('../components/upload.vue'),
    gdMap: () => import('../components/gdMap.vue'),
    upload2: () => import('../components/upload2.vue'),
  },
  methods: {
    getIndex(index) {
      console.log(index);
      this.index = index;
    },
  },
};
</script>

<style>
.my-el-menu {
  height: 100% !important;
}
</style>
