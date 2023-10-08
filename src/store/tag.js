export default{
    namespace:true,  //使用命名空间
    state:{
        isCollapse: false,  //控制菜单的展开还是收起
    },
    mutations:{
        handleCollapse(state){
            state.isCollapse = !state.isCollapse
        }
    }
}

