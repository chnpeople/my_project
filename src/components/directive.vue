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
    <div style="width:100px;height:100px;backgroundColor:pink;" @click="go" ref="my">
      点击
    </div>
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
  mounted() {
    let dom = this.$refs.my
    dom.classList.add('haha')

    var elem = document.createElement('div')
    elem.className='myhaha';
    dom.parentNode.replaceChild(elem, dom)
    elem.appendChild(dom)
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
    },
    go() {
      console.log('sfdfsafdsfdsafdsfds');
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
.haha {
  pointer-events: none;
}
.myhaha { 
  cursor: not-allowed;
}
</style>
