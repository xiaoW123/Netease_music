import axios from 'axios'
// import { BASE_URL,TIME_OUT } from '../config'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
// import type{ HYInterceptors } from './type'

class HYRequest {
  // * 给构造参数定义类型
  instance: AxiosInstance
  // * 给请求配置传入的对象 配置类型
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    // 1.配置全局拦截器
    // this.instance.interceptors.request.use(config => {
    //   console.log('请求拦截成功');
    // }, err => {
    //   console.log('请求拦截err');
    // })

    this.instance.interceptors.response.use(res => {
      return res.data
      // console.log('响应拦截成功');
    },err=>{
      console.log('响应拦截err');
    })

    // 2.配置实例拦截器,根据是否传入interceptors 而是否添加拦截器
    // if()

  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }
  get(config: AxiosRequestConfig) {
    return this.request({...config, method:'GET'})
  }
  post(config: AxiosRequestConfig) {
    return this.request({...config, method:'POST'})
  }

}

export default HYRequest
