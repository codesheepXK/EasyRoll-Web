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
        <el-menu-item index="/assistant/newResult" v-if="flag!=1">
            <el-icon><User /></el-icon>
            <span>最新点名结果</span>
        </el-menu-item>
        <el-menu-item index="/assistant/showData" v-if="flag!=1">
            <el-icon><Menu /></el-icon>
            <span>数据可视化</span>
        </el-menu-item>
        <el-menu-item index="/assistant/dataOut" v-if="flag!=1">
            <el-icon>
                <Monitor />
            </el-icon>
            <span>数据导出</span>
        </el-menu-item>
        <el-menu-item index="/Teacher/newResult" v-if="flag==1">
            <el-icon>
                <House />
            </el-icon>
            <span>最新点名</span>
        </el-menu-item>
        <el-menu-item index="/Teacher/student" v-if="flag==1">
            <el-icon>
                <document />
            </el-icon>
            <span>班级成员</span>
        </el-menu-item>
        <el-menu-item index="/Teacher/dataOut" v-if="flag==1">
            <el-icon>
                <Monitor />
            </el-icon>
            <span>数据导出</span>
        </el-menu-item>
      </el-menu>
</template>

<script setup>
import { onMounted,ref } from 'vue';
//使用router的方法:引入并调用useRouter
import { useRouter} from 'vue-router'
import { useStore } from "vuex" 
const router =useRouter()
const store = useStore()
let flag=ref(0)
onMounted(()=>{
    if(store.state.user.role=="2"){
        flag.value=1
    }
})
</script>

<style lang="scss" scoped>
.menu{
    width: 15%;
    min-width: 200px;
    height: 90vh;
    color: #fff;
    font-weight: bold;
    border-right: 2px solid #999;
    .el-sub-menu{
        .el-menu-item{
            background-color: rgb(247,247,247);
        }
    }
    .el-menu-item.is-active{
        color: rgb(64, 152, 245)!important;
        // background-color: rgb(64, 152, 245) !important;
    }
}
</style>