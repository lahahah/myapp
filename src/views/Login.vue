<template>
  <div style=" height:100vh;background-image:linear-gradient(to bottom, #ff5f6d , #ffc371);padding: 180px">
  <el-form :model="login" status-icon :rules="rules" ref="form" class="login-container" :inline="true" label-width="70px">
    <!-- h3要放在里面:只能有一个根,且title也是表单的一部分 -->
    <h3 class="login_title">用户登录</h3>
    <!-- prop对应rules里的键 -->
    <el-form-item label="用户名" prop="username" >
      <el-input  v-model="login.username" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="login.password" autocomplete="off" ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submit" >登录</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
import Mock from 'mockjs'
import Cookie from 'js-cookie'
import {getMenu} from "@/api";

export default {
  data(){
    return{
      login:{
        username: '',
        password: ''
      },
      // 校验规则
      rules: {
        username:[{required:'true',message:'请输入用户名',trigger:'blur'}],
        password:[{required:'true',message:'请输入密码',trigger:'blur'}]
      }
    }
  },
  methods:{
    submit(){
      // token信息
      /*const token = Mock.Random.guid()
      // token 信息存 cookie ，用于不同页面之间的通信
      Cookie.set('token',token)*/

      //校验通过
      this.$refs.form.validate((valid) => {    //校验是否满足 rules
          if(valid){
            // 传入表单数据
            getMenu(this.login).then(( { data }) => {  //解构后能少些一个 data，直接获取里面的数据
              console.log(data);
              if(data.code === 20000){
                // token 信息存 cookie ，用于不同页面之间的通信
                Cookie.set('token',data.data.token)
                //获取菜单的数据存入 store 中
                //
                this.$store.commit('setMenu',data.data.menu)
                this.$store.commit('addMenu',this.$router)
                // 跳转到首页
                this.$router.push('/home')
              }else{
                // 验证失败的弹窗
                this.$message.error(data.data.message);
              }
            })
          }
      })


    }
  }
}
</script>

<style lang="less" scoped>
  .login-container{
    width: 350px;
    border: 1px solid #eaeaea;
    margin: auto;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;
    box-sizing: border-box;
    .login_title{
      text-align: center;
      margin-bottom: 40px;
      color: #505458;
    }
    .el-input{
      width: 198px;
    }
   /deep/ .el-form-item{
     .el-form-item__content{
       .el-button{
         margin-left: 101px;
         margin-top: 10px;
       }
     }
    }
  }

</style>