<template>
  <el-row>

    <el-col :span="8">
        <el-card class="box-card">
      <!--分割线(下边框)上面-->
          <div class="user">
            <img src="../assets/img/pic.jpg" alt=""/>
            <div class="userinfo">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
      <!--  分割线下面  -->
          <div class="login-info">
            <div class="info">
              <p>上次登录时间：</p><p>2023.10.10</p>
            </div>
            <div class="info">
              <p>上次登录地点：</p><p>上海</p>
            </div>
          </div>
        </el-card>
    </el-col>

    <el-col :span="16">

        内容

    </el-col>

  </el-row>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
}
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}


.user{
  display: flex;
  align-items: center;  //纵轴垂直居中
  border-bottom: 2px solid #aeb0b2;
  height: 130px;
  img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 40px;
  }
}

.userinfo{
  .name{
    font-size: 32px;
    margin-bottom: 10px;
  }
  .access{
    color: #999999;
  }
}

.login-info{
  margin-top: 20px;
  font-size: 10px;
  color: #aeb0b2;

  .info{
    display: flex;
    margin-bottom: 10px;

    p{
      margin-right: 20px;
    }
  }
}
</style>
