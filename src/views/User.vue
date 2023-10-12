<template>
  <div class="manage">
    <!-- 对话框:点击新增或编辑才会弹出表单 -->
    <el-dialog :before-close="handleClose" title="提示" :visible.sync="dialogVisible" width="50%">
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
            <el-option label="男"  :value="1"></el-option>
            <el-option label="女"  :value="0"></el-option>
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
        <el-button @click="cancel()">取 消</el-button>
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
      <el-table
          :data="tableData"
          style="width: 100%"
          stripe
          >
<!--        <el-table-column v-for="(value,key,index) in tableLabel" :key="index" :prop="key" :label="value">

        </el-table-column>-->
        <el-table-column
            prop="name"
            label="姓名"
            >
        </el-table-column>
        <el-table-column
            prop="sex"
            label="性别">
          <template slot-scope="scope">
        <!--  scope相当于一行的数据, scope.row相当于当前行的数据对象          -->
            <span style="margin-left: 10px">{{ scope.row.sex == 1 ? '男' : '女' }}</span>
          </template>
        </el-table-column>
        <el-table-column
            prop="age"
            label="年龄">
        </el-table-column>
        <el-table-column
            prop="birth"
            label="出生日期">
        </el-table-column>
        <el-table-column
            prop="addr"
            label="地址">
        </el-table-column>
        <el-table-column
            prop="addr"
            label="地址">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
                size="mini"
                type="important"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
      <!-- 分页 -->
    </div>
  </div>
</template>

<script>
import { getUser } from "@/api";

export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        age: '',
        sex: '',
        birth: '',
        addr: ''
      },
      rules: {
        name: [{required: true, message: '请输入名称', trigger: 'blur'}, {pattern: /^[a-z]+$/, message: '只能输入字母!'}],
        age: [{required: true, message: '请输入年龄', trigger: 'blur'}],
        sex: [{required: true, message: '请输入性别', trigger: 'blur'}],
        birth: [{required: true, message: '请输入日期', trigger: 'blur'}],
        addr: [{required: true, message: '请输入地址', trigger: 'blur'}],
      },
      tableData: [],
      tableLabel:
        {
          name: '姓名',
          sex: '性别',
          age: '年龄',
          birth: '出生日期',
          addr: '地址'
        }
    };
  },
  methods: {
    //提交用户表单
    submit() {
      this.$refs.form.validate((valid) => {
        console.log(valid, 'valid')
        //this.$refs.form.resetFields();    //清除表单内容
        if (valid) {
          this.dialogVisible = false;
          this.$refs.form.resetFields();    //清除表单内容
        }
      })
    },
    handleClose() {
      this.$refs.form.resetFields();    //清除表单内容
      this.dialogVisible = false;
    },
    cancel() {
      this.handleClose();
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handelUser(){  //公用方法
      getUser().then(({data}) => {
        console.log(data,'data')
        this.tableData = data.list
        // this.tableData = data.list.filter(item => item.sex=item.sex === 1 ? '男' : '女')
      } )
    }
  },
  mounted() {
    this.handelUser()
  }
}
</script>
