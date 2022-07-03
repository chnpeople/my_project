<template>
  <el-container style="height: 100%">
    <el-aside>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo my-el-menu"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="getIndex"
        :router="true"
        style="height: 800px"
      >
        <el-submenu index="1">
          <template slot="title">
            <span>项目11111</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="item.path" v-for="(item, index) in menuList" :key="index">{{item.title}}</el-menu-item>
            
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <span>Test</span>
          </template>
          <el-menu-item-group>
            <el-menu-item @click="$router.push('/keepalive')"
              >keepAlive</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main id="scorll">
      <router-view></router-view>
      <div id="sub"></div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      index: '',
      menuList: [
        {
          path: '/home/change',
          title: '表格嵌套表单'
        },
        {
          path: '/home/aes',
          title: 'AES加密'
        },
        {
          path: '/home/cancelAjax',
          title: '中断axios'
        },
        {
          path: '/home/echarts',
          title: 'echarts'
        },
        {
          path: '/home/getBigNum',
          title: '取数组最大值'
        },
        {
          path: '/home/treeTable',
          title: '树形表格下拉(每次只展开一个)'
        },
        {
          path: '/home/addNew',
          title: '火星登机牌'
        },
        {
          path: '/home/upload',
          title: '文件上传(base64)'
        },
        {
          path: '/home/gdMap',
          title: '高德地图'
        },
        {
          path: '/home/upload2',
          title: '文件上传下载(二进制流)'
        },
        {
          path: '/home/myTable',
          title: '动态生成表格'
        },
        {
          path: '/home/extendTest',
          title: 'Vue.extent'
        },
        {
          path: '/home/office',
          title: '在线预览office'
        },
        {
          path: '/home/quill',
          title: '富文本编辑器'
        },
        {
          path: '/home/scoll',
          title: '滚动事件'
        },
        {
          path: '/home/directive',
          title: 'vue指令'
        },
        {
          path: '/home/elselect',
          title: 'el-select选择器'
        },
        {
          path: '/home/tooltip',
          title: '手写tooltip'
        },
        {
          path: '/home/treeAndSelect',
          title: '选择器嵌套tree(v-clickoutside指令)'
        },
        {
          path: '/home/longTree',
          title: '上万条数据树形控件'
        },
        {
          path: '/home/sub',
          title: '微前端'
        },
        {
          path: '/home/tree',
          title: '树形扁平化'
        },
        {
          path: '/home/swiper',
          title: 'swiper'
        },
      ]
    };
  },
  methods: {
    getIndex(index) {
      console.log(index);
      this.index = index;
    },
  },
  mounted() {
    let scrollDiv = document.getElementById('scorll');
    console.log(scrollDiv);
    scrollDiv.addEventListener('scroll', function() {
        // console.log(scrollDiv.scrollTop);
      },true);
  },
};
</script>

<style>
.my-el-menu {
  height: 100% !important;
}
</style>
