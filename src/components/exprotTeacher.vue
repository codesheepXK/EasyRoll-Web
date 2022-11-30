<template>
    <div class="outBox">
        <h1>数据导出</h1>
        <el-select  v-model="classIndex"  placeholder="Select" size="large" v-show="way!='course'">
            <el-option
                v-for="item in classes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
        <el-button class="allBtn" type="primary">全部名单</el-button>
        <div class="itemBtns">
            <el-button type="success">到课名单</el-button>
            <el-button type="danger">缺课名单</el-button>
        </div>
        <div class="itemBtns">
            <el-button class="leave">请假名单</el-button>
            <el-button type="warning">迟到名单</el-button>
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
        label:"第5周1-2节",
        value:"0"
    },
    {
        label:"第4周1-2节",
        value:"1"
    },
    {
        label:"第3周1-2节",
        value:"2"
    },
    {
        label:"第2周1-2节",
        value:"3"
    },
    {
        label:"第1周1-2节",
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
    .leave{
        color: #333;
        background-color: #eee;
    }
    .el-button{
        font-weight: bold;
        height: 40px;
    }
}
</style>