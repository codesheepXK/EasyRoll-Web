<template>
    <pageHeader></pageHeader>
    <div class="main">
        <asideMenu></asideMenu>
        <div class="view">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import pageHeader from '@/components/pageHeader.vue';
import asideMenu from '../components/asideMenu.vue'
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