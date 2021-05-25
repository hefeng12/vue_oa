import axios from 'axios'; // 引入axios
//import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
// vant的toast提示框组件，大家可根据自己的ui组件更改。
// import { Toast } from 'vant'; 
import baseApi from './api'

// const baseURL='http://localhost:3000/'
// axios.defaults.baseURL=baseURL

function ask(name,params){
    const {method,url}=baseApi[name]
    let headers={
        'Content-Type': 'application/json; charset=utf-8'
    }
    const instance = axios.create({
        baseURL:'/api',
        timeout: 30*1000,
        headers
    });
    let data
    if (method.toUpperCase() !== 'GET') {
        data = params
        params = undefined
    }
    instance.interceptors.response.use(
        function(response) {
          let { status, data } = response
          data.headers=response.headers
          // 请求成功后 处理在此
          if (status === 200) {
            if (data.code === 401) {
              // window.location.href = `http://${domain}/login`
              // localStorage.removeItem('token')
            } else {
              return data
            }
          } else {
            // window.location.href = `http://${domain}/login`
            // return false
          }
        },
        function(error) {
          // 请求失败 错误在此
          return Promise.reject(error)
        }
    )
    let promise = instance.request({
        url,
        method,
        params,
        data
        // transformRequest
    })
    return promise
}

// const instance = axios.create({
//     baseURL:'/api',
//     timeout: 30*1000
//   });
// // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// instance.defaults.headers.post['Content-Type']='application/json;charset=UTF-8';
// instance.interceptors.request.use(    
//     config => {        
//         // 每次发送请求之前判断vuex中是否存在token        
//         // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
//         // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
//         // const token = store.state.token;        
//         // token && (config.headers.Authorization = token);        
//         return config;    
//     },    
//     error => {        
//         return Promise.error(error);    
// })


// // 响应拦截器
// instance.interceptors.response.use(    
//     response => {        
//         if (response.status === 200) {            
//             return Promise.resolve(response);        
//         } else {            
//             return Promise.reject(response);        
//         }    
//     },
//     // 服务器状态码不是200的情况    
//     error => {        
//         if (error.response.status) {          
//             return Promise.reject(error.response);        
//         }       
//     }
// );

// export function get(name, params){   
//     const url = baseApi[name] 
//     return new Promise((resolve, reject) =>{        
//         axios.get(url, {            
//             params: params        
//         })        
//         .then(res => {            
//             resolve(res.data);        
//         })        
//         .catch(err => {            
//             reject(err.data)        
//         })    
//     });
// }
// /** 
//  * post方法，对应post请求 
//  * @param {String} url [请求的url地址] 
//  * @param {Object} params [请求时携带的参数] 
//  */
// export function post(name, params) {  
//     const url = baseApi[name]   
//     console.log(url)
//     return new Promise((resolve, reject) => {         
//         axios.post(url, JSON.stringify(params))        
//         .then(res => {            
//             resolve(res.data);        
//         })        
//         .catch(err => {            
//             reject(err.data)        
//         })    
//     });
// }

export default ask