<template>
    <div class="outBox">
        <h1>数据导出</h1>
        <el-select v-model="classIndex"  placeholder="Select" size="large" v-show="way!='course'">
            <el-option
                v-for="item in classes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
        <el-button class="allBtn" >全部导出</el-button>
        <div class="itemBtns">
            <el-button type="primary">全勤名单</el-button>
            <el-button type="warning">缺课名单</el-button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive,ref } from "vue"
import { useStore } from "vuex" 
const store = useStore()
let classIndex=ref("0")
let classes=reactive([
    {
        label:"全部班级",
        value:"0"
    },
    {
        label:"计算机1班",
        value:"1"
    },
    {
        label:"计算机2班",
        value:"2"
    },
    {
        label:"计算机3班",
        value:"3"
    },
    {
        label:"计算机4班",
        value:"4"
    },
])

</script>

<style lang="scss" scoped>
.outBox{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    height: 35vh;
    margin:0 auto;
    h1{
        font-size: 25px;
    }
    .el-select{
        width: 90%;
    }
    .allBtn{
        width: 90%;
        color: #333;
        background-color: #eee;
    }
    .itemBtns{
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .el-button{
            width: 45%;
            margin: 0px 0px;
        }
    }
    .el-button{
        font-weight: bold;
        height: 40px;
    }
}
</style>