<template>
  <div>
    <!-- <h2><a :href="wordLink" target="_blank">word预览</a></h2> -->
    <h2 @click="getWord">word预览</h2>
    <h2><a :href="excelLink"
         target="_blank">excel预览</a></h2>
    <h2><a :href="pptLink"
         target="_blank">ppt预览</a></h2>
    <div v-html="vHtml"
         style="height: 700px;"></div>
  </div>
</template>

<script>
import mammoth from 'mammoth';
export default {
  data() {
    return {
      vHtml: '',
      wordLink: `https://docs.google.com/viewer?url=http://www.tim007.xyz:8383/word`,
      excelLink: `https://docs.google.com/viewer?url=http://www.tim007.xyz:8383/excel`,
      pptLink: `https://view.officeapps.live.com/op/view.aspx?src=http://www.tim007.xyz:8383/ppt`,
    };
  },
  methods: {
    getWord() {
        // this.$axios({
        //   methods: 'get',
        //   uri: '/word',
        //   responseType: "arraybuffer",
        //   successCallback: (res) => {
        //       console.log(res);
        //       console.log(mammoth);
        //     mammoth
        //       .convertToHtml({ arrayBuffer: res.data })
        //       .then(result => {
        //           console.log(result)
        //           this.vHtml = result.value
        //       })
        //       .done();
        //   },
        // });
      var xhr = new XMLHttpRequest();
      xhr.open('GET', `http://api.tim007.xyz:8383/word`);
      xhr.responseType = 'arraybuffer';
      xhr.onload = (e) => {
          let content = xhr.response;
          console.log('eeeeeeeee', content);
        let blob = new Blob([content]);
        let reader = new FileReader();
        reader.readAsArrayBuffer(blob);
        reader.onload = (loadEvent) => {
          var arrayBuffer = xhr.response; //arrayBuffer

          mammoth
            .convertToHtml({ arrayBuffer: arrayBuffer })
            .then((res) => {
              console.log(res, this.vHtml);
              this.vHtml = res.value;
            })
            .done();
        };
      };
      xhr.send();
    },
  },
};
</script>

<style>
</style>