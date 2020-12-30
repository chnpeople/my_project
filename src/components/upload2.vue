<template>
  <div>
    <input type="file"
           @change="getFile($event)" />

    <br />
    <br />

    <el-upload class="upload-demo"
               action="1"
               :auto-upload='false'
               :limit="1"
               :on-change="uploadFile">
      <el-button size="small"
                 type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getFile(e) {
      console.log(e.target.files[0]);
      let blob = new Blob([e.target.files[0]]);
      let url = URL.createObjectURL(blob);
      console.log(url);
      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, '测试IE.xlsx');
      } else {
        const a = document.createElement('a');
        a.download = '测试.xlsx';
        a.href = url;
        a.click();
      }
    },

    uploadFile(file) {
      console.log(file);
      let formData = new FormData();
      formData.append('file', file.raw);
      this.$axios({
        methods: 'post',
        uri: 'https://www.tim007.xyz/upload',
        data: formData,
        successCallback: (res) => {
          console.log(res);
        },
      });
    },
  },
};
</script>

<style></style>
