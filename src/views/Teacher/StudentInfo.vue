<template>
    <el-select v-model="way"  placeholder="Select" size="large" >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
    </el-select>
    <div class="dataBox" >
        <el-table :data="tableData" style="width: 90%;max-height : 70vh " border 
            :header-cell-style="headerStyle" 
            :cell-style="{borderColor:'#000'}"
            v-show="way!='course'"
        >
            <el-table-column prop="courseName" label="班级" align="center" />
            <el-table-column prop="classNum" label="班级人数" align="center" />
            <el-table-column prop="professorName" label="全勤人数"   align="center" />
            <el-table-column prop="absenceNum" label="累计缺课人数"  align="center" />
            <el-table-column prop="absenceList" label="累计迟到人次" align="center" />
            <el-table-column prop="lateList" label="累计到课比例" align="center" />
            <el-table-column prop="leaveList" label="查看详情" align="center">
                <template #default="scope">
                    <div>点击查看</div>
                </template>
            </el-table-column>
        </el-table>
    </div>

</template>

<script setup>
import { ref,reactive } from 'vue'
import dayjs from 'dayjs'
const headerStyle = reactive({
    "text-align":"center",
    "font-weight":"bold",
    "color":"#000",
    "background-color":"rgb(232,232,232)",
    "border-color":"#000",
    "height":"50px"
})
const way = ref('1')

const options = [
    {
        value: '1',
        label: '按学号排序'
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
const tableData = reactive([
   {},
   {},
   {},
   {},
   {},
   {},
   {},
   {},
   {},
   {},
   {},
   {}
])
</script>

<style lang="scss" scoped>
.el-select{
    margin: 20px 0px 0px 20px;
    height: 6vh;
}
.content{
    display: flex;
    align-items: center;
    justify-content: center;
}
.dataBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    height: 71vh;
    .el-table{
        margin:20px 0px; 
        border: solid 1px #000;
    }
}
</style>
