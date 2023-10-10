export default{
    namespace:true,  //使用命名空间
    state:{
        isCollapse: false,  //控制菜单的展开还是收起
        tabsList: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
            }
        ]//面包屑的数据
    },
    mutations:{
        handleCollapse(state){
            state.isCollapse = !state.isCollapse
        },
        //更新面包屑数据
        selectMenu(state,val){
            console.log(val,'val')
            // 判断添加的数据是否为首页
            if(val.name !== 'home'){
                const index = state.tabsList.findIndex(item => item.name === val.name)
                // 如果不存在
                if( index === -1){
                    state.tabsList.push(val)
                }
            }
        }
    }
}

