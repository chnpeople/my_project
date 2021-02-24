<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="活动名称" prop="name">
      <el-select
        v-model="value"
        multiple
        filterable
        remote
        @focus="clearValue"
        :remote-method="changeValue"
        @remove-tag="deleteValue"
        placeholder="请选择文章标签"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')"
      >立即创建</el-button
    >
    <el-button @click="resetForm('ruleForm')">重置</el-button>
    -----------{{ ruleForm.name }}-------------
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'change' },
        ],
      },
      ruleForm: {
        name: ',',
      },
      options: [],
      value: [],
    };
  },
  methods: {
    clearValue() {
      this.options = [];
    },
    deleteValue(val) {
      console.log(val);
      this.ruleForm.name = this.value.join(',');
    },
    changeValue(val) {
      console.log(val);
      this.$axios({
        methods: 'get',
        uri: '/api/ces2306',
        data: {
          keyWord: val,
        },
        successCallback: (res) => {
          console.log(res, this);
          this.options = res.data;
          this.ruleForm.name = this.value.join(',');
        },
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
