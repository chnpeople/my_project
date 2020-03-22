<template>
  <div>
    <el-table ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
      <el-table-column type="selection"
                       width="55">
      </el-table-column>
      <el-table-column label="商品"
                       width="120">
        <template slot-scope="scope">{{ scope.row.goods }}</template>
      </el-table-column>
      <el-table-column label="姓名"
                       width="120">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column prop="date"
                       label="日期"
                       show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2020-05-04',
        name: '王小虎',
        goods: 'phone'
      }, {
        date: '2016-05-04',
        name: 'vcd',
        goods: 'dvd'
      }, {
        date: '2016-05-01',
        name: '你好啊',
        goods: 'ipad'
      }, {
        date: '2016-05-03',
        name: '测试',
        goods: '笔记本'
      }],
      multipleSelection: []
    }
  },

  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val;
    }
  }
}
</script>

<style>
</style>