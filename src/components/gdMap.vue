<template>
  <div style="width: 600px; height: 600px;">
    <el-amap :center='center'
             :zoom='zoom'>
      <el-amap-marker :position="center"
                      :label="label"></el-amap-marker>
    </el-amap>
  </div>
</template>
<script>
export default {
  data() {
    return {
      center: [116.397428, 39.90923],
      zoom: 15,
      label: {
        content: '自定义标题',
        offset: [10, 12],
      },
    };
  },
};
</script>