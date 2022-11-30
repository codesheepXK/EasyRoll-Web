<template>
  <div class="header">
    <div class="name">易点名</div>
    <div v-if="flag" class="logout" @click="logout">
      <el-icon><SwitchButton /></el-icon>
      <span>退出</span>
    </div>
  </div>
</template>

<script setup>
import { ElMessageBox } from 'element-plus';
import { ElMessage } from 'element-plus';
import { useStore } from "vuex" 
import{onMounted,ref} from "vue"
const store = useStore()
let flag=ref(0)
onMounted(()=>{
  if(store.state.user.token!="") flag.value=1
})
const logout=()=>{
  ElMessageBox.confirm('是否登出', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.commit('user/logout')
          ElMessage.success({
            message: '登出成功!'
          });
        }).catch(() => {
          ElMessage.info({
            message: '已取消登出'
          });
        });
    }
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
    width: 100%;
    height: 10vh;
    background-color:rgb(23,132,252);
    .name{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15%;
        height: 10vh;
        font-size: 30px;
        color: #fff;
    }
    .logout{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100px;
      height: 40px;
      font-size: 20px;
      font-weight: bold;
      span{
        font-size: 15px;
      }
      
      color: #fff;
    }
}
</style>