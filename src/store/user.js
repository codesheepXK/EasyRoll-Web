import router from "@/router";

const state = {
    token:"",
    role:"3",
    name: "柯逍",
    courses:[
        {
            "id": "17908293",
            "name": "软件工程"
        }
    ]

}


const actions = {
    //登录业务 
    // Login({commit,dispatch},msg){
    //     //发起请求
    //     console.log(msg);
    //     localStorage.setItem('token',msg.token)
    //     //获取用户信息后，派发commit修改state中的数据
    //     commit('LOGIN',msg)                          
    // }
} 



const mutations = {
    //登录
    login(state,res){
        //保存token
        state.token = res.Authorization;
        localStorage.setItem('token',msg.token);
        state.role=res.data.role
        state.name=res.data.name
        state.courses=res.data.courses
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