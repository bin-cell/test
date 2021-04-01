/*
axios请求模块
*/
import axios from "axios"

// 创建实例 
const request = axios.create({
    baseURL: 'http://localhost:8080/'
})
export default request