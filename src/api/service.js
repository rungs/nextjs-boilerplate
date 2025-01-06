import axios from 'axios'

let userData

if (typeof window !== 'undefined') {
  userData = JSON.parse(localStorage.getItem('userData'))
}

let axiosIntance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
  headers: {
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': 'application/json; charset=utf-8',
    wacc2: userData?.wacc2,
  },
  timeout: 30000,
})

axiosIntance.interceptors.request.use(
  config => {
    if (config.overrideHeader !== null) {
      config.headers = {
        ...config.headers,
        ...config.overrideHeader,
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

export default axiosIntance
