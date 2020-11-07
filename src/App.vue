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
</style>