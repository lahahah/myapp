<!--这个出口在 App.vue 中-->
<template>
    <div>
        <el-container>
            <el-aside width="auto"><common-aside /></el-aside>  <!--auto 自适应-->
            <el-container>
                <el-header>
                    <common-header></common-header>
                </el-header>
                <common-tag></common-tag>
                <el-main>

                    <!-- {{ this.$store.state.tag.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold' }} -->
                    <router-view /> <!-- 子路由出口-->
                </el-main>
            </el-container>
        </el-container>
        
        
    </div>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'
import CommonTag from "@/components/CommonTag";

export default {
  components: {CommonTag, CommonAside, CommonHeader },
    name: 'Main',
    data(){
        return{
            
        }
    },
}
</script>

<style scoped>
    .el-header{
        padding: 0;
    }
</style>

