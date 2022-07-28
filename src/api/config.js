//配置对象
import axios from 'axios'
export const baseUrl = "http://localhost:3000"

// 开发阶段用这个
// https://www.fastmock.site/mock/99781f9120f3cae8b402f7fca81bd204/fullstack_music/banner

const axiosInstance = axios.create({
    baseURL: baseUrl
})

// 拦截器
// axiosInstance.interceptors.request.use(
//     req=>{
//         console.log('开始请求');
//         // req.code='123121221'
//         // return req
//         let localToken = '1111111';
//         req.headers['Authorization'] = 
//             "Bearer " + localToken
//         return req
//     },
//     err=>{    
//     }
// )
axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误');
    }
)

export { axiosInstance }