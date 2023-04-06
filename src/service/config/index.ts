// 请求配置
export const BASE_URL = 'http://codercba.com:9002'
export const TIME_OUT = 10000

// 辨别开发环境(development) 或 生产环境(production)
// process.env.NODE_ENV：返回字符串development 或 production,用来判断开发环境 或 生产环境
// process.env.NODE_ENV：；由webpack提供
// let BASE_URL = ''
// console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://codercba.com:9002'
// } else {
//   BASE_URL = 'http://codercba.com:9002'
// }

// export { BASE_URL }

