<template>

   <div class="header">
    <h1>数据导出</h1>
        <el-select v-model="way"  placeholder="Select" size="large" >
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
        <el-table :data="classData" style="width: 90%;max-height : 39vh" border 
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
        
        <el-table :data="courseData" style="width: 90%;max-height : 39vh" border 
            :header-cell-style="headerStyle" 
            :cell-style="{borderColor:'#000'}"
            v-show=" way =='course' "
        >
            <el-table-column prop="courseTime" label="上课时间" align="center" />
            <el-table-column prop="classroomNo" label="课程总人数" align="center" />
            <el-table-column prop="professorName" label="到课人数"   align="center" />
            <el-table-column prop="absenceNum" label="缺课人数"  align="center" />
            <el-table-column prop="absenceList" label="请假人数" align="center" />
            <el-table-column prop="lateList" label="迟到人数" align="center" />
            <el-table-column prop="leaveList" label="到课比例" align="center">
            </el-table-column>
        </el-table>
    </div>
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
        <el-button class="allBtn">全部导出</el-button>
        <div class="itemBtns">
            <el-button v-show="way!='course'">全勤名单</el-button>
            <el-button v-show="way=='course'">到课名单</el-button>
            <el-button>缺课名单</el-button>
        </div>
        <div class="itemBtns">
            <el-button v-show="way=='course'">请假名单</el-button>
            <el-button v-show="way=='course'">迟到名单</el-button>
        </div>
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
const classIndex = ref('0')
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
const classes =[
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
]
const classData = reactive([
    {

    }
])
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
    height: 45vh;
    .el-table{
        margin:20px 0px; 
        border: solid 1px #000;
    }
}
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
    .el-button{
        height: 40px;
    }
}

</style>