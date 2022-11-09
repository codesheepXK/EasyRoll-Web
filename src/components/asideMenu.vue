<template>
    <el-menu
        class="menu"
        router
    >
        <el-menu-item index="2">
            <el-icon><House /></el-icon>
            <span>最新点名</span>
        </el-menu-item>
        <el-menu-item index="3">
            <el-icon><Message /></el-icon>
            <span>班级成员</span>
        </el-menu-item>
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
    height: 90vh;
    color: #fff;
    border-right: 1px solid #000;
}
</style>