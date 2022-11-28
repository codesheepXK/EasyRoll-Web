import router from "@/router";

const state = {
    id:"",
    token:"",
    role:"",
    name: "",
    courses:[
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
        console.log(res);
        //保存token
        state.token = res.Authorization;
        localStorage.setItem('Authorization',state.token);
        localStorage.setItem('role',res.role);
        state.role=res.role
        state.name=res.name
        if(res.courses!=[]&&('courses' in res)){
            res.courses.forEach(ele => {
                state.courses.push(ele)
            });
        }
        //修改得到用户数据
        if(res.role=="2"){
            router.push('/teacher/newResult')
        }
        else  router.push('/assistant/newResult')
    },
    logout(state){
        state.token="",
        state.role=""
        localStorage.clear('Authorization')
        localStorage.clear('role')
        router.push("/login")
    }
}

const getters = {};


export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters,
}