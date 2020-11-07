<template>
  <div>
    <el-table ref="tableData"
              :data="tableData"
              style="width: 100%;margin-bottom: 20px;"
              :row-key="getRowKeys"
              @expand-change="expandChildren"
              :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column prop="date"
                       label="日期"
                       sortable
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       sortable
                       width="180">
      </el-table-column>
      <el-table-column prop="address"
                       label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getRowKeys(row) {
        return row.id;
      },
      currentRow: null,
      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
            },
            {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
            },
          ],
        },
        {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          children: [
            {
              id: 41,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
            },
            {
              id: 42,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
            },
          ],
        },
      ],
    };
  },
  methods: {
    expandChildren(row, expanded) {
      if (this.currentRow != null) {
        if (this.currentRow.id == row.id) {
          this.currentRow = null;
        } else {
          this.$refs.tableData.toggleRowExpansion(this.currentRow, false);
          this.currentRow = row;
        }
      } else {
        this.currentRow = row;
      }
    },
  },
};
</script>

<style>
</style>