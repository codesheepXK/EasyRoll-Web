<template>
    <div>
        <img src="https:nicklorry/resources/images"/>
    </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core'
import axios from 'axios'
onMounted(() => {
    axios({
        method: 'get',
        url: 'https:nicklorry/resources/images',
    })

})
</script>

<style>

</style>