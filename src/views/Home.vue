<template>
  <el-row>
    <el-col :span="8">
        <el-card class="box-card">
          <div class="user">
            <img src="../assets/img/pic.jpg" alt=""/>
            <div class="userinfo">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
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
</style>
