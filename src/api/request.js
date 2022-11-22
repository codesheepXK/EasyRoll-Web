//对axios进行二次封装————目的：利用axios的请求和响应拦截器

import axios from 'axios'

//创建axios实例
const requests = axios.create({
    baseURL:'https://nicklorry.top:8090',
});

//从localStorage中获取token
function getToken(){
    return localStorage.getItem('token');
}

//请求拦截器
requests.interceptors.request.use((config)=>{
    //config配置对象，里面有一个属性很重要——headers请求头
    if (getToken()){
        //携带token
        config.headers.Authorization = getToken();
    }
    return config;
},error=>{
    Promise.reject(error);
})


//响应拦截器
requests.interceptors.response.use((res)=>{    
    return res.data;
},(error)=>{
    return Promise.reject(new Error('failed'))
})


export default requests;

