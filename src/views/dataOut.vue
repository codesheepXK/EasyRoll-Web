<template>
   <div class="header">
    <h1>数据导出</h1>
        <el-select v-model="way"  placeholder="Select" size="large">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
        <el-select v-show="way=='course'" v-model="course"  placeholder="请选择课程" size="large" style="margin-left:20px">
            <el-option
                v-for="item in courses"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
    </div>
    <div class="dataBox">
        <el-table :data="classData" style="width: 90%" border 
            :header-cell-style="headerStyle" 
            :cell-style="{borderColor:'#000'}"
        >
            <el-table-column prop="courseName" label="班级" align="center" />
            <el-table-column prop="classroomNo" label="班级总人数" align="center" />
            <el-table-column prop="professorName" label="全勤人数"   align="center" />
            <el-table-column prop="absenceNum" label="累计缺课人数"  align="center" />
            <el-table-column prop="absenceList" label="累计到课比例" align="center" />
            <el-table-column prop="lateList" label="" align="center" />
            <el-table-column prop="leaveList" label="查看详情" align="center">
                <template #default="scope">
                    <div>点击查看</div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
const headerStyle = reactive({
    "text-align":"center",
    "font-weight":"bold",
    "color":"#000",
    "background-color":"rgb(232,232,232)",
    "border-color":"#000",
    "height":"50px"
})
const way = ref('class')//按班级还是课程
const course = ref('')//选择课程名称
const options = [
  {
    value: 'class',
    label: '按班级查看',
  },
  {
    value: 'course',
    label: '按课程查看',
  },
]
const courses = [
    {
        label:"软件工程",
        value:"kex"
    },
    {
        label:"计算机操作系统",
        value:"cb"
    }
]
const classData = reactive([
    {

    }
])
</script>

<style lang="scss" scoped>
.header{
    display: flex;
    align-items: center;
    width: 100%;
    height: 10vh;
    border-bottom: 1px solid #aaa;
    h1{
        font-size: 30px;
        margin:0px 30px
    }
}
.dataBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    height: 80vh;
    .el-table{
        margin:20px 0px; 
        border: solid 1px #000;
      }
}
</style>