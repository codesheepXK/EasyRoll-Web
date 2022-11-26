<template>
    <pageHeader></pageHeader>
    <div class="main">
        <asideMenu></asideMenu>
        <div class="view">
            <WelcomeTag v-if="flag==1"></WelcomeTag>
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import pageHeader from '@/components/pageHeader.vue';
import asideMenu from '../components/asideMenu.vue'
import WelcomeTag from '@/components/WelcomeTag.vue';
import { useStore } from "vuex" 
import { onMounted,ref } from 'vue';
const store = useStore()
let flag=ref(0)
onMounted(()=>{
    if(store.state.user.role=="2"){
        flag.value=1
    }
})
</script>

<style lang="scss" scoped>
.main{
    width: 100%;
    position: relative;
    display: flex;
    .view{
        width: 85%;
    }
}
</style>