<template>
    <div class="content">
        <div id="main"></div>
    </div>
</template>
 
<script lang="js">
import * as echarts from 'echarts';
import { defineComponent, onMounted } from "vue"; // 主要
export default defineComponent({
    setup() {
        onMounted(() => {
            change();
        });
        // 基本柱形图
        const change = () => {
            const chartBox = echarts.init(document.getElementById("main")); // 主要
            const option = {
                title: {
                    text: '点名到课情况',
                    textStyle:{
                        fontSize:28,
                    },
                    left: 'center'
                },
                series: [
                    {
                        type: 'pie',
                        data: [
                            {
                                value: 335,
                                name: '缺课'
                            },
                            {
                                value: 234,
                                name: '请假'
                            },
                            {
                                value: 1548,
                                name: '到课'
                            }
                        ],
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
                    data: [
                        {
                            value: 335,
                            name: '缺课'
                        },
                        {
                            value: 234,
                            name: '请假'
                        },
                        {
                            value: 1548,
                            name: '到课'
                        }
                    ],
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
            chartBox.setOption(option);
            // 根据页面大小自动响应图表大小
            window.addEventListener("resize", function () {
                chartBox.resize();
            });
        };
    },
});
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