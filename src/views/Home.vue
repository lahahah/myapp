<template>
  <!-- 行 -->
  <el-row>
    <!-- 左侧列 -->
    <el-col :span="8" style="padding-right: 10px;">
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
    <el-col :span="16" style=" padding-left: 10px">
      <div class="num">
        <el-card v-for="data in countData" :key="data.name" :body-style="{display: 'flex',padding: 0}">
          <i class="icon" :class="`el-icon-${data.icon}`" :style="{background: data.color}"></i>
          <div class="detail">
            <p class="price">￥{{  data.value }}</p>
            <p class="desc">{{ data.name }}</p>
          </div>
        </el-card>
      </div>
      <!--  折线图  -->
      <el-card style="height: 250px">
        <!--  后面可以通 this.$refs 获取到当前的 dom 节点 -->
        <!-- 必须要配置宽/高，不然会不显示       -->
        <div ref="echarts1" style="height: 250px"></div>
      </el-card>
      <div class="graph">
        <el-card style="height: 250px">
          <!--  柱状图  -->
          <div ref="echarts2" style="height: 250px" ></div>
        </el-card>
        <!--  饼图  -->
        <el-card style="height: 250px">
          <div ref="echarts3" style="height: 230px" ></div>
        </el-card>
      </div>
    </el-col>

  </el-row>
</template>


<script>
import { getData } from "../api";
import * as echarts from 'echarts';  //引入 echarts

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
      const { tableData, userData,videoData } = data.data
      //console.log(tableData)
      console.log(data.data)
      this.tableData = tableData

      //折线图
      // 基于准备好的dom，初始化 echarts实例
      const echarts1 = echarts.init(this.$refs.echarts1)
      // 指定图标的配置项和数据
      var echarts1Option = {
      }
      //处理数据xAxis
      const { orderData } = data.data  //解构出来 orderData 是一个对象
      const xAxis = Object.keys(orderData.data[0]);  //获取所有 key 值
      const xAxisData = { data: xAxis }
      echarts1Option.xAxis = xAxisData
      echarts1Option.yAxis = {}
      echarts1Option.legend = xAxisData

      echarts1Option.series = []
      xAxis.forEach(key => {
        echarts1Option.series.push({
          name: key,
          // 从 orderData.data 数组中的每个对象中提取指定键 key 对应的值，并将这些值组成一个新的数组返回
          data: orderData.data.map(item => item[key]),
          type: 'line'  //折线图
        })
      })
      // echarts1Option.series = [{
      //   name:
      // }]
      console.log(echarts1Option)

      // 使用刚指定的配置项和数据显示图表。
      echarts1.setOption(echarts1Option);

      //  柱状图
      const echarts2 = echarts.init(this.$refs.echarts2)
      const echarts2Option = {
        legend: {
          // 图例文字颜色
          textStyle: {
            color: "#333",
          },
        },
        grid: {  //横线
          left: "20%",
        },
        // 提示框
        tooltip: {
          // 触发类型;轴触发,axis则鼠标hover到一条柱状图显示全部数据
          trigger: "axis",
        },
        xAxis: {
          type: "category", // 类目轴
          data: userData.map(item => item.date),
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
        series: [
          {
            name: '新增用户',
            data: userData.map(item => item.new),
            type: 'bar'
          },
          {
            name: '活跃用户',
            data: userData.map(item => item.active),
            type: 'bar'
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      echarts2.setOption(echarts2Option)

      // 饼图
      const echarts3 = echarts.init(this.$refs.echarts3)
      const echarts3Option = {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [
          {
            data: videoData,
            type: 'pie'
          }
        ],
      }
      // 使用刚指定的配置项和数据显示图表。
      // 饼状图
      echarts3.setOption(echarts3Option)
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
.graph{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;  //左右贴边
  .el-card{
    width: 48%;
  }
}
</style>
