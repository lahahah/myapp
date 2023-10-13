import Mock from 'mockjs'
import homeApi from './mockServerData/home'
import user from  './mockServerData/user'
import permission from  './mockServerData/permission'

//模拟的后端接口
//定义mock请求拦截
Mock.mock('/api/home/getData',homeApi.getStatisticalData)


// 用户管理:增删查改
Mock.mock(/api\/user\/getUser/,user.getUserList)   //正则的写法(两种写法)
Mock.mock('/api/user/add','post',user.createUser)
Mock.mock('/api/user/edit','post',user.updateUser)
Mock.mock('/api/user/del','post',user.deleteUser)

Mock.mock(/api\/permission\/getMenu/,'post',permission.getMenu)
