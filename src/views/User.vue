<template>
  <div class="manage">
    <!-- 对话框:点击新增或编辑才会弹出表单 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
      <!-- 这里放Form表单的代码 -->
      <!-- 表单Form -->
      <el-form ref="form" :inline="true" :model="form" :rules="rules" label-width="80px">  <!-- rules 是表单验证 -->
        <!-- 每一项表单域:el-form-item -->
        <el-form-item label="姓名" prop="name"> <!-- 传入 Form 组件的 model 中的字段 -->
          <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="年龄" prop="age">
          <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请输入性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="出生日期">
          <el-form-item prop="birth">
            <el-date-picker type="date" placeholder="请选择日期" v-model="form.birth">
            </el-date-picker>
          </el-form-item>
        </el-form-item>

        <el-form-item label="地址" prop="addr">
          <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>

    <div class="manage-header">
      <!-- 新增按钮 -->
      <el-button @click="dialogVisible = true" type="primary">+ 新增</el-button>

      <!-- 搜索框 -->

    </div>
    <div class="common-table">
      <!-- 用户数据Table -->

      <!-- 分页 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      form:{
        name: '',
        age: '',
        sex: '',
        birth: '',
        addr: ''
      },
      rules: {
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
        sex: [{ required: true, message: '请输入性别', trigger: 'blur' }],
        birth: [{ required: true, message: '请输入日期', trigger: 'blur' }],
        addr: [{ required: true, message: '请输入地址', trigger: 'blur' }],
      }

    };
  },
  methods:{
    //提交用户表单
    submit(){
      this.$refs.form.validate((valid) => {
        console.log(valid,'valid')
        //this.$refs.form.resetFields();    //清楚表单内容
      })
    }
  }
}
</script>
