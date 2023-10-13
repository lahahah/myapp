<template>
    <div class="header-container">
        <div class="l-content">
            <i :class="collapseIcon" @click="handleCollapse" style="font-size: 30px; color:lightblue"></i>
            <!-- 面包屑 -->
          <el-breadcrumb separator="/" >
            <el-breadcrumb-item v-for="item in tags" :key="item.path">
              <router-link :to="item.path">
                {{ item.label }}
              </router-link>
            </el-breadcrumb-item>
          </el-breadcrumb>

            <!-- <span >首页</span> -->
        </div>
        <div class="r-content">
            <i class="el-icon-quanping" @click="handleFullScreen"></i>
            <el-dropdown @command="handleClick">
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/img/pic.jpg" alt="" />
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item command="logout">退出</el-dropdown-item>

                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>


<script>
import '@/assets/css/iconfont/iconfont.css'  //引入图标
import { mapState } from 'vuex'
import Cookie from "js-cookie";
export default {
    data() {
        return {
            collapseIcon: 'el-icon-s-fold'   //默认是折叠的图标
        }

    },
    methods: {
        handleCollapse() {
            this.$store.commit('handleCollapse')
            this.collapseIcon = this.$store.state.tag.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
        },
        handleFullScreen() {  //全屏
            document.documentElement.requestFullscreen()
        },
        handleClick(command){
          if(command === 'logout'){
            console.log('登出')
            //清除 cookie 中的 token
            Cookie.remove('token')
            //跳转到登录页面
            this.$router.push({name:'login'})
          }
        }
    },
    computed:{
      ...mapState({
        tags: state => state.tag.tabsList,  //注意单词的拼写，不要前后不一致，不然得不到信息的，重点！！！
      })
      // tags是别名
    },
}
</script>

<style lang="less" scoped>
.header-container {
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between; //主轴上两端显示
    align-items: center; //纵轴上垂直居中
    padding: 0 20px;
    .text {
      font-size: 14px;
      margin-left: 10px;
      color: #fff;
    }

    .r-content {
      .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 20px;
      }
      .el-icon-quanping {
        color: #fff;
        font-size: 25px
      }
    }

  .l-content {
    display: flex;
    align-items: center;
    .el-breadcrumb {
      margin-left: 20px;
      /deep/ .el-breadcrumb__item { //样式穿刺
        .el-breadcrumb__inner {
          a{
            font-weight: normal;
            color: #666;

          }
        }
        &:last-child{   // 也就是选中哪个哪个就是 白色（最后一个显示）
          .el-breadcrumb__inner{
            a{
              color: #fff;
            }
          }
        }
      }
    }
}



}



/*::v-deep .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    line-height: 30px;
}*/





</style>