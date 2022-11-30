<template>
        <div class="main">
            <div class="box box1">   
                <h1>点名进度</h1> 
                <circle-graph :currentData="currentData"></circle-graph>
            </div>
            <div class="box box2">
                <h1>缺课名单</h1>
                <el-table :data="absenceData" border stripe style="width: 80%;max-height:200px" :header-cell-style="headerStyle" >
                    <el-table-column prop="studentId" label="学号"  align="center"/>
                    <el-table-column prop="studentName" label="姓名"  align="center"/>
                 </el-table>
            </div>
            <div class="box box3">
                <h1>到课情况</h1>
                <pie-graph :arriveData="arriveData"></pie-graph>
            </div>
            <div class="box">
                <h1>请假名单</h1>
                <el-table :data="leaveData" border stripe style="width: 80%;max-height:200px" :header-cell-style="headerStyle" >
                    <el-table-column prop="studentId" label="学号"  align="center"/>
                    <el-table-column prop="studentName" label="姓名"  align="center"/>
                 </el-table>
            </div>
        </div>
</template>

<script setup>
import PieGraph from './PieGraph.vue'; 
import CircleGraph from './CircleGraph.vue';
import {ref,reactive,onMounted,onUnmounted,watch} from 'vue'
import { useStore } from "vuex" 
import axios from 'axios'
const store = useStore()
const leaveData= reactive([])//请假名单
const absenceData = reactive([])//缺课名单
const currentData=reactive([])//目前点名情况
const arriveData=reactive([])//出席情况
//长连接开启函数
const onOpen = (res)=>{
    console.log("websocket开启");
}
const rollNum=ref(0)//总人数
const isDote =ref(0)//已经点的人数
let timer=null;
const attendNum=ref(0)//到课人数
const absenceNum=ref(0)//缺课人数
const leaveNum=ref(0)//请假人数
const lateNum=ref(0)//迟到人数
const curCourseId=ref("")
let socket = null
const init=()=>{
    currentData.splice(0,currentData.length);
    arriveData.splice(0,arriveData.length)
    absenceData.splice(0,absenceData.length)
    leaveData.splice(0,leaveData.length)
    attendNum.value=0
    absenceNum.value=0
    leaveNum.value=0
    isDote.value=0
}
const onMessage = (res)=>{
    if(res!=null){
        let msg=JSON.parse(res.data);
        console.log(msg.data);
        if(msg.data.flag==0){
            init()
            rollNum.value=msg.data.enrollNum;
            msg.data.absenceList.forEach(ele=> {
                absenceData.push(ele)
            });
            msg.data.leaveList.forEach(ele=>{
                leaveData.push(ele)
            })
            currentData.push({value:0,name:"已点名"},{value:rollNum.value,name:"未点名"})
        }
        if(msg.data.flag==1){
            isDote.value=isDote.value+1;
            if(msg.data.state==0){
                attendNum.value=attendNum.value+1
            }
            if(msg.data.state==1){
                leaveData.push({studentId:msg.data.studentId,studentName:msg.data.studentName})
                leaveNum.value=leaveNum.value+1
            }
            if(msg.data.state==2){
                lateNum.value=lateNum.value+1
            }
            if(msg.data.state==3){
                absenceData.push({studentId:msg.data.studentId,studentName:msg.data.studentName})
                absenceNum.value=absenceNum.value+1
            }
            currentData.splice(0,currentData.length)
            arriveData.splice(0,arriveData.length)

            currentData.push({value:isDote.value,name:"已点名"})
            currentData.push({value:rollNum.value-isDote.value,name:"未点名"})

            arriveData.push({value:attendNum.value,name:"到课人数"})
            arriveData.push({value:absenceNum.value,name:"缺课人数"})
            arriveData.push({value:leaveNum.value,name:"请假人数"})
            arriveData.push({value:lateNum.value,name:"迟到人数"})
        }
    } 
}
const onClose = (res)=>{
    console.log("websocket关闭");
    clearInterval(timer)
}
const send=()=>{
    timer = setInterval(()=>{
        socket.emit("heart shake");
    },30000)
}
const createWebsocket=()=>{
    if(socket!=null&&typeof(socket)!=undefined){
        socket.close()
        socket = null
    }
    init()
    let courseId=store.state.user.curCourseId
    let token=store.state.user.token
    if(typeof(store.state.user.curCourseId)==undefined||courseId==null||courseId==""){
        return;
    }
    let url="wss://nicklorry.top:8090/professor/roll/data/"+courseId+"/"+token;
    socket = new WebSocket(url)

    socket.onopen = onOpen
    socket.onmessage = onMessage
    socket.onclose = onClose

}

onMounted(() => {
    // createWebsocket()
})
onUnmounted(() => {
    if(socket!=null){
        // 关闭连接
        socket.close()
        // 销毁 websocket 实例对象
        socket = null
        clearInterval(timer)
    }

})
const headerStyle = reactive({
    "text-align":"center",
    "font-weight":"bold",
    "font-size":"16px",
    "color":"#eee",
    "border-color":"#ccc",
    "background-color":"rgb(64, 152, 245)",
})

watch(()=>store.state.user.curCourseId,(newVal,oldVal)=>{
    if(typeof(store.state.user.curCourseId)!=undefined&&store.state.user.curCourseId!=""&&socket==null){
        console.log("新"+newVal);
        console.log("旧"+oldVal);
        createWebsocket()
    }
},{
    deep:true,
    immediate:true
})
</script>

<style lang="scss" scoped>
.main{
    display: flex;
    flex-wrap: wrap;
    position: relative;
    height: 82vh;
}
.box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 50%;
    text-align: center;
    box-sizing: border-box;
    h1{
        color: #111;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 30px;
    }
}
.box1 {
    border-bottom: 1px solid rgb(64, 152, 245);
    border-right: 1px solid rgb(64, 152, 245);
    padding-top: 20px;
}
.box2{
    border-bottom: 1px solid rgb(64, 152, 245);
}
.box3{
    border-right: 1px solid rgb(64, 152, 245);
    padding-top: 20px;
}
</style>