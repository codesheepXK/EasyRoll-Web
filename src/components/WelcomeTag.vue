<template>
    <div class="welcome">
        <div class="title">{{ title }}</div>
        <div class="teacher">{{ teacher }}老师,您好！</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "计算机操作系统",
            teacher: "陈勃"
        }
    },
}
</script>

<style scoped>
.welcome {
    height: 8vh;
    font-size: 25px;
    line-height: 8vh;
    border-bottom: 2px solid #808080;
    overflow: hidden;
    box-sizing: border-box;
}

.title {
    float: left;
    padding-left: 50px;
}

.teacher {
    float: right;
    padding-right: 50px;
}
</style>