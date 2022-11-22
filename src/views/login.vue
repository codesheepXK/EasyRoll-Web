<template>
    <pageHeaderVue></pageHeaderVue>
    <div class="loginBox">
        <img src="https://nicklorry.top:8090/auth/login/QRCode"/>
        <h1>请使用微信扫码登录</h1>
    </div>
</template>

<script setup>
import pageHeaderVue from "@/components/pageHeader.vue"
import { reactive,ref } from "vue"
import { onMounted,onBeforeUnmount } from '@vue/runtime-core'
import axios from 'axios'
import { useRouter} from 'vue-router'
import { useStore } from "vuex" 
const router =useRouter()
const store = useStore()
const onOpen = (res)=>{
    console.log("hhh");
}
const onMessage = (res)=>{
    let msg=JSON.parse(res.data);
    console.log(msg.status);
    if(msg.status == 200){
        console.log("1111")
        router.push({
			path:'/newResult',
		})
   }
}
const onClose = (res)=>{
    console.log("kkk");
}
let socket = null
onMounted(() => {
    axios({
        method: 'get',
        url: 'https://nicklorry.top:8090/auth/login/QRCode',
        
    }).then(response=> {
        let socketId=response.headers['socketid'];
        let url="wss://nicklorry.top:8090/auth/login/web/"+socketId;
        console.log(url);
        socket = new WebSocket(url)
        socket.onopen = onOpen
        socket.onmessage = onMessage
        socket.onclose = onClose
    });
    axios({
        method:'get',
        url:"http://127.0.0.1:8080/test",
        data:{
            name:"hhh"
        }
    }).then(res=>{
        console.log(res);
    })
})
onBeforeUnmount(() => {
    // 关闭连接
      socket.close()
    // 销毁 websocket 实例对象
    socket = null
})
// 建立连接的事件




// // 提交按钮的点击事件处理函数
// const send = () => {
//     let word="";
//   // 向服务器发送消息
//     socket.emit('send', word)
// }

</script>

<style scoped>
.loginBox{
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
}
img{
    width:400px;
    height: 400px;
}
h1{
    margin-top: 20px;
    font-size: 25px;
}
</style>