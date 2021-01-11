<template>
  <div>
      <h2><a :href="wordLink" target="_blank">word预览</a></h2>
      <h2><a :href="excelLink" target="_blank">excel预览</a></h2>
      <h2><a :href="pptLink" target="_blank">ppt预览</a></h2>
  </div>
</template>

<script>
export default {
    data() {
        return {
            wordLink: `https://docs.google.com/viewer?url=http://www.tim007.xyz:8383/word`,
            excelLink: `https://docs.google.com/viewer?url=http://www.tim007.xyz:8383/excel`,
            pptLink: `https://view.officeapps.live.com/op/view.aspx?src=http://www.tim007.xyz:8383/ppt`
        }
    },
}
</script>

<style>

</style>