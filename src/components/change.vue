<template>
	<el-form>
		<el-form
			:model="ruleForm"
			:rules="ruleForm.rules"
			ref="ruleForm"
		>
			<el-table
				:data="ruleForm.tableData"
				style="width: 100%"
			>
				<el-table-column
					label="商品"
					width="180"
				>
					<template slot-scope="scope">
						<el-form-item
							:prop="'tableData.'+scope.$index+'.goods'"
							:rules="ruleForm.rules.goods"
						>
							<el-select
								size="small"
								v-model="scope.row.goods"
								placeholder="请选择活动区域"
							>
								<el-option
									label="手机"
									value="phone"
								></el-option>
								<el-option
									label="平板"
									value="ipad"
								></el-option>
								<el-option
									label="dvd"
									value="dvd"
								></el-option>
								<el-option
									label="电脑"
									value="labtop"
								></el-option>
							</el-select>
						</el-form-item>
					</template>
				</el-table-column>
				<el-table-column
					label="姓名"
					width="180"
				>
					<template slot-scope="scope">
						<el-form-item
							:prop="'tableData.'+scope.$index+'.name'"
							:rules="ruleForm.rules.name"
						>
							<el-input
								size="small"
								v-model="scope.row.name"
								placeholder="请输入内容"
							></el-input>
						</el-form-item>
					</template>
				</el-table-column>
				<el-table-column label="日期">
					<template slot-scope="scope">
						<el-form-item
							:prop="'tableData.'+scope.$index+'.date'"
							:rules="ruleForm.rules.date"
						>
							<el-date-picker
								size="small"
								v-model="scope.row.date"
								type="date"
								placeholder="选择日期"
							>
							</el-date-picker>
						</el-form-item>
					</template>
				</el-table-column>
			</el-table>
			<el-form-item>
				<el-button
					type="primary"
					@click="submitForm('ruleForm')"
				>提交</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</el-form>
</template>

<script>
export default {
	data () {
		return {
			ruleForm: {
				name: '',
				date: '',
				goods: '',
				tableData: [{
					date: '',
					name: '王小虎',
					goods: 'phone',
					id: '1'
				}, {
					date: '2016-05-04',
					name: '',
					goods: 'dvd',
					id: '2'
				}, {
					date: '2016-05-01',
					name: '你好啊',
					goods: 'ipad',
					id: '3'
				}, {
					date: '2016-05-03',
					name: '测试',
					goods: '',
					id: '4'
				}],
				//规则
				rules: {
					name: [{ required: true, message: '名字不能为空', trigger: 'blur' }],
					goods: [{ required: true, message: '产品不能为空', trigger: 'change' }],
					date: [{ required: true, message: '日期不能为空', trigger: 'blur' }]
				},
			}
		};
	},
	methods: {
		submitForm (formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					console.log(this.ruleForm.tableData);
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
	}
}
</script>

<style scoped>
input /deep/.el-input__inner {
	border: 1px solid transparent;
}
</style>