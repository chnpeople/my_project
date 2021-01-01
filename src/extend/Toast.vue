<template>
  <div class="container"
       v-if="show">
    <div class="text">{{text}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
};
</script>

<style scoped>
.container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
}
.text {
    width: 500px;
    height: 200px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -250px;
    margin-top: -100px;
    text-align: center;
    line-height: 200px;
    font-size: 24px;;
    color: red;
}
</style>