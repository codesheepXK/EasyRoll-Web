<template>
    <div class="content">
        <div id="main"></div>
    </div>
</template>
 
<script lang="js">
import * as echarts from 'echarts';
export default {
    data(){
        return{
            MyChart:null
        }
    },
    props:{
        arriveData:{
            type:Array
        }
    },
    mounted() {
        this.change();
    },
    watch:{
        arriveData:{
            deep:true,
            handler(){
                this.MyChart.setOption(
                    {
                        series:[ 
                            {
                                data: this.arriveData
                            },
                            {
                                data: this.arriveData
                            }
                        ]  
                    }
                )
	        }
        }
    },
    methods:{
        change (){
            // if ( this.MyChart != null &&  this.MyChart != "" &&  this.MyChart != undefined) {
            //     this.MyChart.dispose();//销毁
            // }
            this.MyChart = echarts.init(document.getElementById("main")); // 主要
            const option = {
                // title: {
                //     text: '点名到课情况',
                //     textStyle:{
                //         fontSize:20,
                //     },
                //     left: 'center'
                // },
                series: [
                    {
                        type: 'pie',
                        data: this.arriveData,
                        label: {
                            show:true,
                            fontSize:'15',
                            formatter: '{b}:{c}人', 
                            fontWeight: 'bold'
                        },
                        labelLine: {
                            show:true,
                            length:20,
                            length2:25,
                            lineStyle:{
                                width:2
                            }
                        }
                    },
                    {
                    type: 'pie',
                    data: this.arriveData,
                    label: {
                        show: true,
                        position:'inner',
                        fontSize: '12',
                        formatter: '{d}%',
                        fontWeight: 'bold'
                    },
                    labelLine: {
                        show: true,
                        length: 20,
                        length2: 25,
                        lineStyle: {
                            width: 2
                        }
                    }
                }
                ],
            };
            this.MyChart.setOption(option);
            
        }
    }
        // 基本柱形图
    
}
</script>
 
<style lang="scss" scoped>
.content{
    height: 100%;
    width: 100%;
}
#main {
    height: 100%;
    width: 100%;
}
</style>