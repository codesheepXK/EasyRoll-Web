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
let flag=0;
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