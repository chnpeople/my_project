<template>
  <div>
    <el-button @click="getData">10万条数据</el-button>
    <div id="container"></div>

    <div style="width: 500px; height: 800px;">
      <table
        id="my-table"
        class="my-table"
        cellspacing="0"
        border="0"
        bordercolor="#ccc"
      ></table>
    </div>

    <div style="width: 500px; height: 800px;">
      <table class="my-table" cellspacing="0" border="0" bordercolor="#ccc">
        <tbody>
          <tr>
            <td>姓名</td>
            <td>xxx</td>
            <td>性别</td>
            <td>男</td>
          </tr>
          <tr>
            <td colspan="2">地址</td>
            <td colspan="2">广东省深圳市宝安区宝安机场</td>
          </tr>
          <tr>
            <td rowspan="6">航司</td>
            <td rowspan="3">大陆</td>
            <td colspan="2">南航</td>
          </tr>
          <tr>
            <!-- <td>航司</td> -->
            <!-- <td>大陆</td> -->
            <td colspan="2">东航</td>
          </tr>
          <tr>
            <!-- <td>航司</td> -->
            <!-- <td>大陆</td> -->
            <td colspan="2">国航</td>
          </tr>
          <tr>
            <!-- <td>航司</td> -->
            <td rowspan="2">亚洲</td>
            <td colspan="2">阿联酋航空</td>
          </tr>
          <tr>
            <!-- <td>航司</td> -->
            <!-- <td>亚洲</td> -->
            <td colspan="2">日本航空</td>
          </tr>
          <tr>
            <!-- <td>航司</td> -->
            <td>国外</td>
            <td colspan="2">泛美航空</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      table: [
        ['姓名', 'xxx', '性别', '男'],
        ['地址', '广东省深圳市宝安区宝安机场'],
        ['航司', '大陆', '南航'],
        ['航司', '大陆', '东航'],
        ['航司', '大陆', '国航'],
        ['航司', '亚洲', '阿联酋航空'],
        ['航司', '亚洲', '日本航空'],
        ['航司', '国外', '泛美航空'],
      ],
    };
  },
  created() {},
  mounted() {
    this.hanlderTabele();
  },
  methods: {
    hanlderTabele() {
      const mytable = document.getElementById('my-table');
      console.log('mytable', mytable);
      const tbody = document.createElement('tbody');
      let span = 1;
      this.table.forEach((item, idx) => {
        span += 1;
        const tr = document.createElement('tr');
        let tdLength = item.length;
        item.forEach((item2, index) => {
          const td = document.createElement('td');
          td.setAttribute(
            'style',
            'border-bottom: 1px solid #ccc; border-right: 1px solid #ccc; padding: 5px; text-align: center;'
          );
          if (item.length === 2) {
            td.setAttribute('colspan', 2);
          } else if (item.length === 3 && index === 2) {
            td.setAttribute('colspan', 2);
          }
          if (idx != 0 && index === 0 && item2 == this.table[idx - 1][index]) {
            return;
          }
          span += 1;
          if (idx != 0 && index === 0 && item2 == this.table[idx + 1][index]) {
            span += 1;
            td.setAttribute('rowspan', span);
          }
          tr.appendChild(td);
          td.innerHTML = item2;
        });
        tbody.appendChild(tr);
      });
      mytable.appendChild(tbody);
    },

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

<style lang="scss" scoped>
.my-table {
  width: 100%;
  margin-top: 20px;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  td {
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding: 5px;
    text-align: center;
  }
}
</style>
