<template>
    <el-menu
        class="menu"
        router
    >
        <el-menu-item index="/newResult">
            <el-icon><User /></el-icon>
            <span>最新点名结果</span>
        </el-menu-item>
        <el-menu-item index="/showData">
            <el-icon><House /></el-icon>
            <span>数据可视化</span>
        </el-menu-item>
        <el-menu-item index="/dataOut">
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
    .el-menu-item.is-active{
        color: #fff !important;
        background-color: var(--el-menu-active-color) !important;
    }
}
</style>