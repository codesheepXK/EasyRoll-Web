<template>
    <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="学号" width="180" />
            <el-table-column prop="name" label="姓名" width="180" />
    </el-table>
</template>

<script setup>
import { reactive } from 'vue';
    let tableData = reactive([
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
    ])

</script>

<style scoped>
    .el-table{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>