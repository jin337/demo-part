import axios from 'axios'

const Http = axios.create({
  baseURL: process.env.NEXT_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

// 请求拦截器
Http.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const Authorization = sessionStorage.getItem('AUTHTOKEN')
      if (Authorization) {
        config.headers.Authorization = Authorization // 登录token（后端登录接口返回）
      }
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器
Http.interceptors.response.use(
  (response) => {
    const { data } = response
    if ([100300, 100301].includes(data.code)) {
      if (typeof window !== 'undefined') {
        // 无效code,跳转至域名
        sessionStorage.clear()
        window.alert(data.message)
      }
      setTimeout(() => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/login'
      }, 1000)
    } else if ([200, '000000'].includes(data.code)) {
      // 成功
      return Promise.resolve(data)
    } else {
     if (typeof window !== 'undefined') {
       window.alert(data.message || data.error)
     }
      return Promise.resolve(data)
    }
  },
  (error) => Promise.reject(error)
)

export default Http
