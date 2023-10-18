<template>
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
            background-color="#545c64" text-color="#fff" active-text-color="#fff" :collapse-transition="false">
            <h3>{{ isCollapse ? "后台" : "通用后台管理系统" }}    </h3>
            <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.label }}</span>
            </el-menu-item>
            <el-submenu v-for="item in hasChildren" :key="item.label" index="item.label">
                <template slot="title">
                    <i :class="`el-icon-${item.icon}`"></i>
                    <span slot="title">{{ item.label }}</span>
                </template>
                <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
                    <router-link :to="{name:subItem.name}"> 
                        <el-menu-item   :index="subItem.path">
                        {{ subItem.label }}   
                    </el-menu-item>
                </router-link>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
</template>

<script>
import Cookie from "js-cookie";
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            // isCollapse: false,
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        ...mapMutations(['selectMenu']),  //可以负载
        clickMenu(item){  //item 就是点击的每一个页面路由数据
            console.log(item)
            //当页面的路由与跳转的路由不一致时才允许跳转
            if(this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/')))
            {   this.$router.push(item.path);}
            //或是
           // this.$store.commit('selectMenu',item);
           this.selectMenu(item);
        }
    },
    computed: {
        // 没有子菜单
        noChildren() {
            return this.menuData.filter(item => !item.children)
        },
        //有子菜单
        hasChildren() {
            return this.menuData.filter(item => item.children)
        },
        isCollapse(){
            return this.$store.state.tag.isCollapse;
        },
        menuData(){
          // 判断当前数据，如果缓存中没有，当前 store 中去获取
          return JSON.parse(Cookie.get('menu')) || this.$store.state.tag.menu
      }
    }
}
</script>

<style lang="less" scoped>
/* 但不包括那些同时具有 "el-menu--collapse" 类名的元素 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

/deep/.el-menu {
    height: 100%;
    transition: all .1s;
    border-right: none;
    h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400;
    }
}

.el-menu-item {
    min-width: 0 !important;
    width: calc(100% - 10px);
    margin: 5px;
    height: 45px !important;
    line-height: 45px !important;
    border-radius: 5px;
    
    :hover {
  color: #fff !important;
}
}.is-active {
  background-color: dodgerblue !important;
}

::v-deep .el-menu-item-group__title{
    margin-top: -15px;
}
/*设置点击前的样式 */
a{
  text-decoration: none;
  color: #fff;
	}
/*设置点击后的样式 */
.router-link-active {
    text-decoration: none;
  }

</style>
