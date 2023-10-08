<template>
    <div class="header-container">
        <div class="l-content">
            <i :class="collapseIcon" @click="handleCollapse" style="font-size: 30px; color:lightblue"></i>
            <!-- 面包屑 -->
            <el-breadcrumb>
                <el-breadcrumb-item :to="{ path: '/' }" class="text">首页</el-breadcrumb-item>
            </el-breadcrumb>

            <!-- <span >首页</span> -->
        </div>
        <div class="r-content">
            <i class="el-icon-quanping" @click="handleFullScreen"></i>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/img/pic.jpg" alt="" />
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>

                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>


<script>
import '@/assets/css/iconfont/iconfont.css'  //引入图标
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
        }
    }
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
}

.l-content {
    display: flex;
}

.text {
    font-size: 20px;
    margin-left: 10px;
    color: #fff;

    :hover {
        color: #fff !important;
    }
}

::v-deep .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    line-height: 30px;
}

.r-content {
    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 20px;
    }
}

.el-icon-quanping {
    color: #fff;
    font-size: 25px
}
</style>