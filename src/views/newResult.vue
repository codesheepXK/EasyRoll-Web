<template>
  <div class="header">
    <h1>点名结果</h1>
    <el-select v-model="value" class="m-2" placeholder="Select" size="large">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        />
    </el-select>
  </div>
  <div class="tableBox">
    <el-table :data="tableData" style="width: 90%" border :header-cell-style="headerStyle" :cell-style="{borderColor:'#000'}">
        <el-table-column prop="date" label="课程" />
        <el-table-column label="教室"/>
        <el-table-column prop="name" label="任课老师"  />
        <el-table-column label="缺课"/>
        <el-table-column label="缺课名单"/>
        <el-table-column label="迟到"/>
        <el-table-column label="迟到名单"/>
        <el-table-column label="请假"/>
        <el-table-column label="请假名单"/>
    </el-table>
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
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const headerStyle = reactive({
    "text-align":"center",
    "font-weight":"bold",
    "color":"#000",
    "background-color":"rgb(232,232,232)",
    "border":"1px solid #000"
})
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
    &::-webkit-scrollbar{
         display:none
    }
    .el-table{
        margin:20px 0px; 
        border: solid 1px #000;
    }
}
</style>