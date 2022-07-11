<template>
  <div>
    <div>
      <h2 @click="getWord">word预览</h2>
      <h2><a :href="excelLink" target="_blank">excel预览</a></h2>
      <h2><a @click="watchPPT" target="_blank">ppt预览</a></h2>
      
    </div>
    <div v-if="dialogVisible" class="full-screen">
      <pdf
        class="my-pdf"
        :src="pptLink"
        ref="pdf"
        :page="pageNum"
        :rotate="pageRotate"
        @progress="loadedRatio = $event"
        @page-loaded="pageLoaded($event)"
        @num-pages="pageTotalNum = $event"
        @error="pdfError($event)"
        @link-clicked="page = $event"
      >
      </pdf>
      <el-button
        :theme="'default'"
        type="submit"
        :title="'基础按钮'"
        @click.stop="prePage"
        class="mr10"
      >
        上一页</el-button
      >
      <el-button
        :theme="'default'"
        type="submit"
        :title="'基础按钮'"
        @click.stop="nextPage"
        class="mr10"
      >
        下一页</el-button
      >
      <div class="page">{{ pageNum }}/{{ pageTotalNum }}</div>
      <el-button
        :theme="'default'"
        type="submit"
        :title="'基础按钮'"
        @click.stop="clock"
        class="mr10"
      >
        顺时针</el-button
      >
      <el-button
        :theme="'default'"
        type="submit"
        :title="'基础按钮'"
        @click.stop="counterClock"
        class="mr10"
      >
        逆时针</el-button
      >
    </div >
    <el-dialog title="文件预览" :visible.sync="dialogVisible2" width="50%">
      <div v-html="vHtml"></div>
    </el-dialog>
  </div>
</template>

<script>
import mammoth from 'mammoth';
import pdf from 'vue-pdf';
export default {
  components: {
    pdf,
  },
  data() {
    return {
      dialogVisible2: false,
      dialogVisible: false,
      vHtml: '',
      wordLink: `https://docs.google.com/viewer?url=http://www.tim007.xyz:8383/word`,
      excelLink: `https://docs.google.com/viewer?url=http://www.tim007.xyz:8383/excel`,
      pptLink: `http://www.tim007.xyz:8383/pdf`,
      pageNum: 1,
      pageTotalNum: 1,
      pageRotate: 0,
      // 加载进度
      loadedRatio: 0,
      curPageNum: 0,
    };
  },
  mounted() {

  },
  methods: {
    watchPPT() {
      this.pptLink = pdf.createLoadingTask('https://www.tim007.xyz/pdf');
      this.pptLink.promise.then((pdf) => {
        this.numPages = pdf.numPages;
      });
      this.dialogVisible = true;
    },
    getWord() {
      this.$axios({
        methods: 'get',
        uri: 'https://www.tim007.xyz/word',
        responseType: 'arraybuffer',
        successCallback: (res) => {
          console.log(res);
          console.log(mammoth);
          mammoth
            .convertToHtml({ arrayBuffer: res.data })
            .then((result) => {
              console.log(result);
              this.vHtml = result.value;
            })
            .done();
        this.dialogVisible2 = true;
        },
      });
      // var xhr = new XMLHttpRequest();
      // xhr.open('GET', `https://api.tim007.xyz:8383/word`);
      // xhr.responseType = 'arraybuffer';
      // xhr.onload = (e) => {
      //     let content = xhr.response;
      //     console.log('eeeeeeeee', content);
      //   let blob = new Blob([content]);
      //   let reader = new FileReader();
      //   reader.readAsArrayBuffer(blob);
      //   reader.onload = (loadEvent) => {
      //     var arrayBuffer = xhr.response; //arrayBuffer

      //     mammoth
      //       .convertToHtml({ arrayBuffer: arrayBuffer })
      //       .then((res) => {
      //         console.log(res, this.vHtml);
      //         this.vHtml = res.value;
      //       })
      //       .done();
      //   };
      // };
      // xhr.send();
    },
    // 上一页函数，
    prePage() {
      var page = this.pageNum;
      page = page > 1 ? page - 1 : this.pageTotalNum;
      this.pageNum = page;
    },
    // 下一页函数
    nextPage() {
      var page = this.pageNum;
      page = page < this.pageTotalNum ? page + 1 : 1;
      this.pageNum = page;
    },
    // 页面顺时针翻转90度。
    clock() {
      this.pageRotate += 90;
    },
    // 页面逆时针翻转90度。
    counterClock() {
      this.pageRotate -= 90;
    },
    // 页面加载回调函数，其中e为当前页数
    pageLoaded(e) {
      this.curPageNum = e;
    },
    // 其他的一些回调函数。
    pdfError(error) {
      console.error(error);
    },
  },
};
</script>

<style>
.my-pdf {
  width: 40%;
  margin: 0 auto;
}
.full-screen {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: auto;
}
</style>
