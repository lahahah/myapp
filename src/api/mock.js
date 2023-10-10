import Mock from 'mockjs'
import homeApi from './mockServerData/home'

//模拟的后端接口
//定义mock请求拦截
Mock.mock('/api/home/getData',homeApi.getStatisticalData())