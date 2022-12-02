<template>
    <div class="welcome">
        <el-select v-model="courseIndex"  placeholder="暂无课程" size="large">
            <el-option
                v-for="item in courses"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
        <div class="teacher">{{ name }}老师,您好！</div>
    </div>
</template>

<script setup>
import { onMounted,ref,reactive,watch } from "vue"
import { useStore } from "vuex" 
const store = useStore()
let name =ref("")
let courseIndex=ref()
let courses=reactive([])
watch(()=>courseIndex,(newVal,oldVal)=>{
    store.commit('user/setCurCourseId',newVal.value)
},{
    deep:true,
    immediate:true
})
onMounted(()=>{
    name.value=store.state.user.name

    store.state.user.courses.forEach(element => {
        element['label']=element['name']
        element['value']=element['id']
        courses.push(element)
    });
    if(store.state.user.courses.length!=0){
        courseIndex.value=store.state.user.courses[0].id;
    }
})
</script>

<style lang="scss" scoped>
.welcome {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    font-size: 25px;
    line-height: 8vh;
    border-bottom: 2px solid rgb(64, 152, 245);
    overflow: hidden;
    font-weight: bold;
    box-sizing: border-box;
}

.el-select{
    // margin-left: 20px;
    width: 200px;
    margin-left: 20px;
}
::v-deep .el-input__wrapper{
    // box-shadow:0 0 0 1px;
    font-size: 25px;
    .el-input__inner{
        color: #000;
        font-weight: bold;
        // border-color: #DCDFE6  !important;
    }
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