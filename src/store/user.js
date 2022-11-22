import router from "@/router";

const state = {
    //保存是否为已经登录的状态
    isLogined : false,
    //用户token
    token:'',


}


const actions = {
    //登录业务 
    Login({commit,dispatch},msg){
        //发起请求
        console.log(msg);
        localStorage.setItem('token',msg.token)
        //获取用户信息后，派发commit修改state中的数据
        commit('LOGIN',msg)                          
    }
} 



const mutations = {
    //登录
    LOGIN(state,result){
        //修改登录状态为成功
        state.isLogined = true;
        //保存token
        state.token = result.token;
        //修改得到用户数据
        alert("登陆成功!欢迎");
        router.push('/newResult')
    },
}

const getters = {};


export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters,
}