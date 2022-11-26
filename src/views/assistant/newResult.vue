<template>
  <div class="header">
    <h1>点名结果</h1>
    <el-select v-model="value" placeholder="Select" size="large">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        />
    </el-select>
  </div>
  <div class="tableBox" >
    <div class="table"  v-for="(table,index) in tableData" :key="index">
        <el-table :data="table" style="width: 90%" border  stripe
          :header-cell-style="headerStyle" 
          :cell-style="{borderColor:'#ccc'}"
        >
          <el-table-column prop="courseName" label="课程" align="center" />
          <el-table-column prop="classroomNo" label="教室" align="center" />
          <el-table-column prop="professorName" label="任课老师"   align="center" />
          <el-table-column prop="absenceNum" label="缺课" width="100px" align="center" />
          <el-table-column prop="absenceList" label="缺课名单" align="center" >
            <template #default="scope">
              <ul>
                <li v-for="(item,index) in scope.row.absenceList" :key="index">
                  <span>{{item}}</span>
                </li>
              </ul>
            </template>
          </el-table-column>
          <el-table-column prop="lateNum" label="迟到" width="100px" align="center" />
          <el-table-column prop="lateList" label="迟到名单" align="center" >
            <template #default="scope">
              <ul>
                <li v-for="(item,index) in scope.row.lateList" :key="index">
                  <span>{{item}}</span>
                </li>
              </ul>
            </template>
          </el-table-column>
          <el-table-column prop="leaveNum" label="请假" width="100px" align="center" />
          <el-table-column prop="leaveList" label="请假名单" align="center">
            <template #default="scope">
              <ul>
                <li v-for="(item,index) in scope.row.leaveList" :key="index">
                  <span>{{item}}</span>
                </li>
              </ul>
            </template>
          </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script  setup>
import { ref,reactive } from 'vue'
const value = ref('Option1')
const options = [
  {
    value: 'Option1',
    label: '今天',
  },
  {
    value: 'Option2',
    label: '昨天',
  },
  {
    value: 'Option3',
    label: '前天',
  },
  {
    value: 'Option4',
    label: '日期选择',
  },
]
const headerStyle = reactive({
    "text-align":"center",
    "font-weight":"bold",
    "font-size":"17px",
    "color":"#eee",
    "border-color":"#ccc",
    "background-color":"rgb(64, 152, 245)",
    "height":"50px"
})
const tableData=reactive([
  [
    {
      "courseName":"软件工程",
      "classroomNo":"07307",
      "professorName":"Kex",
      "absenceNum":"2",
      "absenceList":["aaa","bbb"],
      "lateNum":"2",
      "lateList":["ccc","ddd"],
      "leaveNum":"2",
      "leaveList":["eee","fff"]
    },
  ],
  [
    {
      "courseName":"软件工程",
      "classroomNo":"07307",
      "professorName":"Kex",
      "absenceNum":"2",
      "absenceList":["aaa","bbb"],
      "lateNum":"2",
      "lateList":["ccc","ddd"],
      "leaveNum":"2",
      "leaveList":["eee","fff"]
    },
  ],
  [
    {
      "courseName":"软件工程",
      "classroomNo":"07307",
      "professorName":"Kex",
      "absenceNum":"2",
      "absenceList":["aaa","bbb"],
      "lateNum":"2",
      "lateList":["ccc","ddd","ccc","ddd","ccc","ddd","ccc","ddd"],
      "leaveNum":"2",
      "leaveList":["eee","fff"]
    },
  ],
  [
    {
      "courseName":"软件工程",
      "classroomNo":"07307",
      "professorName":"Kex",
      "absenceNum":"2",
      "absenceList":["aaa","bbb"],
      "lateNum":"2",
      "lateList":["ccc","ddd"],
      "leaveNum":"2",
      "leaveList":["eee","fff"]
    },
  ],
  [
    {
      "courseName":"软件工程",
      "classroomNo":"07307",
      "professorName":"Kex",
      "absenceNum":"2",
      "absenceList":["aaa","bbb"],
      "lateNum":"2",
      "lateList":["ccc","ddd"],
      "leaveNum":"2",
      "leaveList":["eee","fff"]
    },
  ],
  [
    {
      "courseName":"软件工程",
      "classroomNo":"07307",
      "professorName":"Kex",
      "absenceNum":"2",
      "absenceList":["aaa","bbb"],
      "lateNum":"2",
      "lateList":["ccc","ddd"],
      "leaveNum":"2",
      "leaveList":["eee","fff"]
    },
  ],
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
.tableBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    height: 80vh;
    overflow: auto;
    // &::-webkit-scrollbar{
    //      display:none
    // }
    .table{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      .el-table{
        margin:20px 0px; 
      }
    }
}
</style>