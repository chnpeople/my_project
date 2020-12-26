<template>
  <div>
    <el-upload action
               :on-exceed="handleExceed"
               :multiple="false"
               list-type='text'
               :show-file-list="true"
               :before-upload="beforeUpload"
               :drag="true"
               :limit="1"
               :http-request="uploadFile">
      请拖拽文件到次处上传123
    </el-upload>
    <h1><a href="https://www.tim007.xyz/static/it-demo.apk" download="it_home.apk">it-demo下载</a></h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileObj: {
        name: '',
        content: '',
      },
    };
  },
  methods: {
    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 5; //不能上传超过5M

      if (!isLt2M) {
        this.$message.warning('不能超过5MB');
        return false;
      }

      let type = file.name.split('.')[1];
      if (type != 'xlsx' && type != 'xls') {
        this.$message.warning('请上传excel表格');
        return false;
      }
    },
    uploadFile(item) {
      console.log(item);
      let fr = new FileReader();
      console.log(fr);
      fr.readAsDataURL(item.file);
      console.log(fr.result);
      fr.onload = (res) => {
        console.log(res);
        this.fileObj.content = res.currentTarget.result;
        const a = document.createElement('a');
            a.download = '测试.xlsx';
            a.href = this.fileObj.content;
            a.click();
      };
      this.fileObj.name = item.file.name;
    },

    handleExceed(files, fileList) {
      console.log(files, fileList);
      this.$message.warning('只能上传一个文件');
    },
  },
};
</script>

<style>
</style>
