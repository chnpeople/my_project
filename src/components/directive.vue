<template>
  <div>
    <span>
      <el-button v-model="show" @click="login('A')" type="primary">模拟A登录</el-button>
    </span>
    <span>
      <el-button v-model="show"  @click="login('B')" type="primary">模拟B登陆</el-button>
    </span>
    <p v-has="'A'" class="pink"></p>
    <p v-has="'B'" class="skyblue"></p>
  </div>
</template>

<script>
// import v_open from '../directives/open.js';
export default {
  // directives: {
  //   open: v_open,
  // },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    login(val) {
      if(val == 'A') {
        window.localStorage.removeItem('login');
        window.localStorage.setItem('login',JSON.stringify('A'))
      }else {
        window.localStorage.removeItem('login');
        window.localStorage.setItem('login',JSON.stringify('B'))
      }
    }
  },
};
</script>

<style>
.pink {
  width:500px; 
  height: 500px; 
  border: 1px solid red; 
  background-color: pink;
}
.skyblue {
  width:500px; 
  height: 500px; 
  border: 1px solid blue; 
  background-color: skyblue;
}
</style>
