<template>
  <div class='wrap'
       ref="wrap">
    <div class="fixed-right" ref="tip"></div>
  </div>
</template>

<script>
export default {
  mounted() {
      let fixedEle = this.$refs.tip;
    window.onresize = () => {
      if (scrollDiv.parentNode.parentNode.clientWidth <= 600) {
        fixedEle.style.right = '-90px';
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
.fixed-right {
  width: 100px;
  height: 300px;
  background: #ffaa00;
  position: fixed;
  top: 150px;
  right: 0px;
  transition: all 1s;
}

.fixed-right:hover {
  right: 0px !important;
}
</style>
