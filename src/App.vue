<template>
  <div id="test">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'abc',
    };
  },
};
</script>

<style>
#test {
  height: 100%;
}
::-webkit-scrollbar-track-piece {
  -webkit-border-radius: 0
}
::-webkit-scrollbar {
  width: 5px;
  height: 10px
}
::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: #b8b8b8;
  -webkit-border-radius: 6px;
  outline-offset: -2px;
  filter: alpha(opacity = 50);
  -moz-opacity: 0.5;
  -khtml-opacity: 0.5;
  opacity: 0.5
}
::-webkit-scrollbar-thumb:hover {
  height: 50px;
  background-color: #878987;
  -webkit-border-radius: 6px
}
</style>