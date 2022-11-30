import router from "@/router";

const state = {
    id:"",
    token:"",
    role:"",
    name: "",
    courses:[],
    curCourseId:"",
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
    setCurCourseId(state,newId){
        state.curCourseId=""+newId
    },
    login(state,res){
        //保存token
        console.log(res);
        state.token = res.Authorization;
        localStorage.setItem('Authorization',state.token);
        localStorage.setItem('role',res.role);
        state.role=res.role
        state.name=res.name
        if(res.courses!=[]&&('courses' in res)){
            state.courses.splice(0,state.courses.length)
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