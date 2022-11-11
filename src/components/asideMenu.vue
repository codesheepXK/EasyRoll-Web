<template>
    <el-menu
        class="menu"
        router
    >
        <el-menu-item index="/newResult">
            <el-icon><User /></el-icon>
            <span>最新点名结果</span>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon><House /></el-icon>
            <span>数据可视化</span>
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Message /></el-icon>
            <span>数据查看</span>
          </template>
            <el-menu-item index="3-1">
                <el-icon><User /></el-icon>
                <span>查看班级</span>
            </el-menu-item>
            <el-menu-item index="3-2">
                <el-icon><User /></el-icon>
                <span>查看课程</span>
            </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="4">
            <el-icon><User /></el-icon>
            <span>数据导出</span>
        </el-menu-item>
      </el-menu>
</template>

<script>

</script>

<style lang="scss" scoped>
.menu{
    width: 15%;
    min-width: 200px;
    height: 90vh;
    color: #fff;
    border-right: 1px solid #eee;
    .el-sub-menu{
        .el-menu-item{
            background-color: rgb(247,247,247);
        }
    }
}
</style>