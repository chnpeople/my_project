<template>
	<div>
		<el-table
			ref="multipleTable"
			:data="tableData"
			tooltip-effect="dark"
			style="width: 100%"
			@selection-change="handleSelectionChange"
		>
			<el-table-column
				type="selection"
				width="55"
			> </el-table-column>
			<el-table-column
				label="商品"
				width="120"
			>
				<template slot-scope="scope">{{ scope.row.goods }}</template>
			</el-table-column>
			<el-table-column
				label="姓名"
				width="120"
			>
				<template slot-scope="scope">{{ scope.row.name }}</template>
			</el-table-column>
			<el-table-column
				prop="date"
				label="日期"
				show-overflow-tooltip
			>
			</el-table-column>
		</el-table>
		<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-sizes="[5, 10, 15, 20]"
			:page-size="pagesize"
			layout="total, sizes, prev, pager, next, jumper"
			:total="this.tableData.length"
		>
		</el-pagination>
		<el-button @click="handleSave">保存</el-button>
	</div>
</template>

<script>
export default {
	data () {
		return {
			currentPage: 1,
			pagesize: 5,
			tableData: [
				{
					date: '2020-05-04',
					name: '王小虎',
					goods: 'phone',
					id: 1
				},
				{
					date: '2016-05-04',
					name: 'vcd',
					goods: 'dvd',
					id: 2
				},
				{
					date: '2016-05-01',
					name: '你好啊',
					goods: 'ipad',
					id: 3
				},
				{
					date: '2026-01-22',
					name: '苹果手机',
					goods: 'dvd',
					id: 4
				},
				{
					date: '2015-03-03',
					name: '小米10pro',
					goods: 'labtop',
					id: 5
				},
				{
					date: '2011-08-15',
					name: '三星',
					goods: 'phone',
					id: 6
				}
			],
			//选中的选项
			selectedList: []
		}
	},

	created () {
		this.autoSave();
		let res = JSON.parse(localStorage.getItem('saveData'))
		this.toggleSelection(res)
	},

	methods: {
		toggleSelection (rows) {
			if (rows) {
				rows.forEach(row => {
					console.log(row)
					this.$nextTick(() => {
						this.$refs.multipleTable.toggleRowSelection(
							this.tableData[row.id - 1],
							true
						)
					})
				})
			} else {
				// this.$refs.multipleTable.clearSelection()
			}
		},
		//获取选中的表格选项
		handleSelectionChange (val) {
			this.selectedList = val;
			this.autoSave();
		},
		//保存选中的选项
		handleSave () {
			localStorage.removeItem('saveData')
			localStorage.setItem('saveData', JSON.stringify(this.selectedList))
		},
		handleSizeChange () { },
		handleCurrentChange () { },
		//一分钟自动保存一次
		autoSave () {
			setInterval(() => {
				if (this.selectedList.length > 0) {
					localStorage.removeItem('saveData')
					localStorage.setItem('saveData', JSON.stringify(this.selectedList))
				} else {
					// alert(1)
					localStorage.removeItem('saveData')
					return false;
				}
			}, 10000)
		}
	}
}
</script>

<style>
.el-table__header-wrapper .el-checkbox {
	display: none;
}
</style>
