<template>
     <el-select v-model="way"  placeholder="Select" size="large" >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
    </el-select>
    <div class="dataBox">
        
        <el-table :data="courseData" stripe style="width: 90%;max-height : 38vh" border 
            :header-cell-style="headerStyle" 
            :cell-style="{borderColor:'#ccc'}"
        >
            <el-table-column prop="courseTime" label="上课时间" align="center" />
            <el-table-column prop="classroomNo" label="课程总人数" align="center" />
            <el-table-column prop="professorName" label="到课人数"   align="center" />
            <el-table-column prop="absenceNum" label="缺课人数"  align="center" />
            <el-table-column prop="absenceList" label="请假人数" align="center" />
            <el-table-column prop="lateList" label="迟到人数" align="center" />
            <el-table-column prop="leaveList" label="到课比例" align="center"/>
        </el-table>
    </div>
    <exprotTeacher/>
</template>

<script setup>
import exprotTeacher from '@/components/exprotTeacher.vue';
import { ref,reactive } from 'vue'
import dayjs from 'dayjs'
const headerStyle = reactive({
    "text-align":"center",
    "font-weight":"bold",
    "font-size":"17px",
    "color":"#eee",
    "border-color":"#ccc",
    "background-color":"rgb(64, 152, 245)",
    "height":"50px"
})

const way = ref('1')
const options = [
    {
        value: '1',
        label: '按上课时间排序'
    },
    {
        value: '2',
        label: '按缺课次数排序',
    },
    {
        value: '3',
        label: '按到课次数排序',
    },
]
const courseData = reactive([
    {
        courseTime:"第10周第1-2节"
    },
    {
        courseTime:"第9周第1-2节"
    },
    {
        courseTime:"第8周第1-2节"
    },
    {
        courseTime:"第7周第1-2节"
    },
    {
        courseTime:"第6周第1-2节"
    },
    {
        courseTime:"第5周第1-2节"
    },
    {
        courseTime:"第4周第1-2节"
    },
    {
        courseTime:"第3周第1-2节"
    },
    {
        courseTime:"第2周第1-2节"
    },
    {
        courseTime:"第1周第1-2节"
    }
])
</script>

<style lang="scss" scoped>
.el-select{
    margin: 10px 0px 0px 20px;
    height: 5vh;
}

.dataBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    height: 39vh;
    .el-table{
        margin:20px 0px; 
    }
}

</style>
