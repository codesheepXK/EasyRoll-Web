<template>
    <div class="welcome">
        <div class="title">{{course }}</div>
        <div class="teacher">{{ name }}老师,您好！</div>
    </div>
</template>

<script setup>
import { onMounted,reactive,ref } from "vue"
import { useStore } from "vuex" 
const store = useStore()
let name =ref("")
let course=ref("")
onMounted(()=>{
    name.value=store.state.user.name
    course.value=store.state.user.courses[0].name
})
</script>

<style scoped>
.welcome {
    height: 8vh;
    font-size: 25px;
    line-height: 8vh;
    border-bottom: 2px solid #808080;
    overflow: hidden;
    box-sizing: border-box;
}

.title {
    float: left;
    padding-left: 50px;
}

.teacher {
    float: right;
    padding-right: 50px;
}
</style>