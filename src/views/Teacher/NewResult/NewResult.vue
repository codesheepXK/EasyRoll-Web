<template>
        <div class="main">
            <div class="blue">    
                <circle-graph></circle-graph>
            </div>
            <div class="orange">
                <absence-info></absence-info>
            </div>
            <div class="red">
                <pie-graph></pie-graph>
            </div>
            <div class="green">
                <leave-info></leave-info>
            </div>
        </div>
</template>

<script>
import PieGraph from './echarts/PieGraph.vue'; 
import CircleGraph from './echarts/CircleGraph.vue';
import AbsenceInfo from './home/AbsenceInfo.vue';
import LeaveInfo from "./home/LeaveInfo.vue";
export default {
    components:{
        PieGraph,
        CircleGraph,
        AbsenceInfo,
        LeaveInfo
    }
}
</script>

<style scoped>
.main{
    display: flex;
    flex-wrap: wrap;
    position: relative;
    height: 82vh;
    /* background-color: pink; */
}

.blue {
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: relative; */
    height: 50%;
    width: 50%;
    /* background-color: blue; */
    border-bottom: 1px solid #808080;
    border-right: 1px solid #808080;
    text-align: center;
    box-sizing: border-box;
}
.orange{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 50%;
    /* background-color: orange; */
    border-bottom: 1px solid #808080;
    box-sizing: border-box;
}
.red{
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: relative; */
    height: 50%;
    width: 50%;
    /* background-color: red; */
    border-right: 1px solid #808080;
    box-sizing: border-box;
}
.green{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 50%;
    /* background-color: green; */
    box-sizing: border-box;
}
</style>