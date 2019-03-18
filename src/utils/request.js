import axios from 'axios'
import qs from 'qs'
// 创建一个拥有通用配置的axios实例
const service = axios.create({
  timeout: 1000,
  // 是否携带cookie信息
  withCredentials: true
})
// 设置请求拦截器
service.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return config
}, (error) => {
  console.log('err' + error) // for debug
  return Promise.reject(error)
})
export default service