<template>
        <div class="main">
            <div class="box box1">    
                <circle-graph></circle-graph>
            </div>
            <div class="box box2">
                <h1>缺课名单</h1>
                <el-table :data="tableData" border stripe style="width: 80%;max-height:200px" :header-cell-style="headerStyle" >
                    <el-table-column prop="date" label="学号"  align="center"/>
                    <el-table-column prop="name" label="姓名"  align="center"/>
                 </el-table>
            </div>
            <div class="box box3">
                <pie-graph></pie-graph>
            </div>
            <div class="box">
                <h1>请假名单</h1>
                <el-table :data="tableData" border stripe style="width: 80%;max-height:200px" :header-cell-style="headerStyle" >
                    <el-table-column prop="date" label="学号"  align="center"/>
                    <el-table-column prop="name" label="姓名"  align="center"/>
                 </el-table>
            </div>
        </div>
</template>

<script setup>
import PieGraph from './PieGraph.vue'; 
import CircleGraph from './CircleGraph.vue';
import {ref,reactive} from 'vue'
const headerStyle = reactive({
    "text-align":"center",
    "font-weight":"bold",
    "font-size":"16px",
    "color":"#eee",
    "border-color":"#ccc",
    "background-color":"rgb(64, 152, 245)",
})
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
    },
]
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
    border-bottom: 1px solid #808080;
    border-right: 1px solid #808080;
    padding-top: 20px;
}
.box2{
    border-bottom: 1px solid #808080;
}
.box3{
    border-right: 1px solid #808080;
    padding-top: 20px;
}
</style>