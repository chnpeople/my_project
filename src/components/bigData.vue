<template>
  <div>
    <el-button @click="getData">10万条数据</el-button>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async getData() {
      console.log(new Date().getTime());
      const container = document.getElementById('container');
      const res = await this.myFetch();
      console.log(res);

      // 直接渲染
      //   for (let index = 0; index < res.length; index++) {
      //     const div = document.createElement('div');
      //     div.innerText = index;
      //     container.appendChild(div);
      //   }

      const total = res.length;
      const page = 0;
      const limit = 200;
      const totalPage = Math.ceil(total / limit);
      const render = (page) => {
        setTimeout(() => {
          if (page > totalPage) return;
          for (
            let index = page * limit;
            index < page * limit + limit;
            index++
          ) {
            const div = document.createElement('div');
            div.innerText = index;
            container.appendChild(div);
          }
          render(page + 1);
        }, 0);
      };

      // setTimeout渲染
      //   render(page);
      const requestRender = (page) => {
        requestAnimationFrame(() => {
          if (page > totalPage) return;
          for (
            let index = page * limit;
            index < page * limit + limit;
            index++
          ) {
            const div = document.createElement('div');
            div.innerText = index;
            container.appendChild(div);
          }
          requestRender(page + 1);
        });
      };

      // requestAnimationFrame渲染
      requestRender(page);

      console.log(new Date().getTime());
    },
    myFetch() {
      return new Promise((resolve, reject) => {
        const list = [];
        for (let index = 0; index < 100000; index++) {
          list.push(index);
        }
        resolve(list);
      });
    },
  },
};
</script>

<style></style>
