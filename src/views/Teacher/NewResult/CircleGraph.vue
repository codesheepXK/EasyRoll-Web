<template>
    <div class="circle">
        <div id="main_1"></div>
    </div>
</template>
 
<script >
import * as echarts from 'echarts';
export default{
    data(){
        return{
            MyChart:null
        }
    },
    mounted(){
        this.circle();
    },   
    watch:{
        currentData:{
            deep:true,
            handler(){
                this.MyChart.setOption({
                    series:[ 
                        {
                            data: this.currentData
                        },
                        {
                            data: this.currentData
                        }
                    ]
                });
	        }
        }
    },
    props:{
        currentData:{
           type: Array
        }
    },
    methods:{
        circle(){
            // if ( this.MyChart != null &&  this.MyChart != "" &&  this.MyChart != undefined) {
            //     this.MyChart.dispose();//销毁
            // }
            this.MyChart = echarts.init(document.getElementById("main_1")); // 主要
            const option = {
                // title: {
                //     text: '点名进度情况',
                //     textStyle: {
                //         fontSize: 20,
                //     },
                //     left:'center'
                // },
                series: [
                    {
                        type: 'pie',
                        data: this.currentData,
                        radius: ['40%', '70%'],
                        label: {
                            show: true,
                            fontSize: '15',
                            formatter: '{b}:{c}人',
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
                    },
                    {
                        type: 'pie',
                        data: this.currentData,
                        radius: ['40%', '70%'],
                        label: {
                            show: true,
                            position: 'inner',
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

}

</script>
 
<style lang="scss" scoped>
.circle {
    height: 100%;
    width: 100%;
}

#main_1 {
    height: 100%;
    width: 100%;
}
</style>