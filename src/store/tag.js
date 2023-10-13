import Cookie from "js-cookie";
export default{
    namespace:true,  //使用命名空间
    state:{
        isCollapse: false,  //控制菜单的展开还是收起
        tabsList: [  //首页是默认存在的
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
            }
        ],//面包屑的数据
        menu: []
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
        },
        closeTags(state,item){
            state.tabsList.splice(state.tabsList.indexOf(item),1);
            // const index = state.tabsList.findIndex(val => val.name === item.name)
            // state.tabsList.splice(index,1)
        },
        //设置 menu 的数据
        setMenu(state,val){
            state.menu = val
            // 通过 cookie 来缓存 menu 数据，防止刷新时就没有了
            Cookie.set('menu',JSON.stringify(val))  //cookie的数据必须为字符串
        },
        //动态注册路由
        addMenu(state,router){
            // 判断Cookie
            if (!Cookie.get('menu')) return
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu

            const menuArray=[]

            // 组装路由
            menu.forEach(item => {
                // 判断是否有子路由
                if (item.children) {
                    item.children = item.children.map(itemm => {
                        itemm.component = () => import(`../views/${itemm.url}`)
                        return itemm
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component=()=>import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            });
            console.log(menuArray,'menuArry')
            // 路由动态添加
            menuArray.forEach(item=>{
                router.addRoute('main',item)
            })
        }
    }
}

