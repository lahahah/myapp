<template>
<!-- 行 -->
  <el-row>
<!-- 左侧列 -->
    <el-col :span="8">
      <!--   头像   -->
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
              <p>上次登录地点：</p><p>上海</p>  <!-- <span></span> 就可以在一行显示 -->
            </div>
          </div>
        </el-card>
      <!-- 表格，使用循环表头  -->
      <el-card style="margin-top: 20px; height: 460px;">
<!--        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
          <el-table-column
              prop="name"
              label="课程"
              >
          </el-table-column>
          <el-table-column
              prop="todayBuy"
              label="今日购买"
              >
          </el-table-column>
          <el-table-column
              prop="monthBuy"
              label="本月购买">
          </el-table-column>
          <el-table-column
              prop="totalBuy"
              label="总购买">
          </el-table-column>
        </el-table>-->

        <el-table :data="tableData" stripe style="width: 100%">
         <!--  值是以键值对格式存储  -->
          <el-table-column v-for="(value,key,index) in tableLabel" :key="index" :prop="key" :label="value">

          </el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <!-- 右侧列 -->
    <el-col :span="16">
      <div class="num">
        <el-card v-for="data in countData" :key="data.name" :body-style="{display: 'flex',padding: 0}">
          <i class="icon" :class="`el-icon-${data.icon}`" :style="{background: data.color}"></i>
          <div class="detail">
            <p class="price">￥{{  data.value }}</p>
            <p class="desc">{{ data.name }}</p>
          </div>
        </el-card>
       <!--  折线图  -->

      </div>
    </el-col>

  </el-row>
</template>


<script>
import { getData } from "../api";

export default {
  name: 'HomeView',
  data(){
    return{
      tableData: [],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    }
  },
  mounted(){
    getData().then(({ data }) => {
      const { tableData } = data.data
      console.log(tableData)
      this.tableData = tableData
    })
  }
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

.num{
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  .icon{
    width: 80px;
    height: 80px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    line-height: 80px;
  }
  .detail{
    margin-left: 15px;
    display: flex;
    flex-direction: column;  //改变主轴为上下显示
    justify-content: center;  //控制项目在主轴上居中对齐
    align-items: flex-start;
    .price{
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
      line-height: 30px;
      height: 30px;
    }
    .desc{
      font-size: 10px;
      color: #999999;
      text-align: center;
    }
  }
  .el-card{
    width: 32%;
    margin-bottom: 20px;
  }
}
</style>
