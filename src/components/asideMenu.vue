<template>
    <!-- 
        default-active: 设置默认高亮
        router.currentRoute.value.fullPath:获取当前完整路由
        作用: 保证刷新后还是原页面 
    -->
    <el-menu
        class="menu"
        :default-active="router.currentRoute.value.fullPath"
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

<script setup>
import {onMounted} from 'vue'
//使用router的方法:引入并调用useRouter
import { useRouter} from 'vue-router'

const router =useRouter()
// onMounted(() => {
//     console.log(router.currentRoute.value.fullPath);
// })
</script>

<style lang="scss" scoped>
.menu{
    width: 15%;
    min-width: 200px;
    height: 90vh;
    color: #fff;
    border-right: 2px solid #999;
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