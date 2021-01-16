<template>
  <div class='wrap'
       ref="wrap">
       <div class="fix-wrap" ref="tip">
          <div class="fixed-right" ></div>
       </div>
  </div>
</template>

<script>
export default {
  mounted() {
      let fixedEle = this.$refs.tip;
    window.onresize = () => {
      if (scrollDiv.parentNode.parentNode.clientWidth <= 600) {
        fixedEle.style.right = '-140px';
      } else {
        fixedEle.style.right = '0px';
      }
      console.log(scrollDiv.parentNode.parentNode.clientWidth);
    };

    let scrollDiv = this.$refs.wrap;
    console.log(scrollDiv.parentNode);
    //绑定事件
    scrollDiv.parentNode.addEventListener('scroll', function () {
      console.log(scrollDiv.parentNode.scrollTop);
    });
  },
};
</script>

<style>
.wrap {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 2000px;
  background-color: pink;
}
.fix-wrap {
  box-sizing: border-box;
  width: 150px;
  height: 300px;
  background-color: rgba(225, 225, 225, 0);
  position: fixed;
  top: 150px;
  right: 0px;
  /* z-index: 999; */
  transition: all 1s;
  padding-right: 50px;
}
.fixed-right {
  width: 100px;
  height: 300px;
  background: #ffaa00;
  opacity: 1;
}


.fix-wrap:hover {
  right: 0px !important;
}
</style>
