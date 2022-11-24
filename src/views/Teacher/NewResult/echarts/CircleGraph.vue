<template>
    <div class="circle">
        <div id="main_1"></div>
    </div>
</template>
 
<script lang="js">
import * as echarts from 'echarts';
import { defineComponent, onMounted } from "vue"; // 主要
export default defineComponent({
    
    setup() {
        onMounted(() => {
            circle();
        });
        // 基本柱形图
        const circle = () => {
            const chartBox = echarts.init(document.getElementById("main_1")); // 主要
            const option = {
                title: {
                    text: '点名进度情况',
                    textStyle: {
                        fontSize: 28,
                    },
                    left:'center'
                },
                series: [
                    {
                        type: 'pie',
                        data: [
                            {
                                value: 335,
                                name: '已点名'
                            },
                            {
                                value: 234,
                                name: '未点名'
                            }
                        ],
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
                        data: [
                            {
                                value: 335,
                                name: '已点名'
                            },
                            {
                                value: 234,
                                name: '未点名'
                            }
                        ],
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
.circle {
    height: 100%;
    width: 100%;
}

#main_1 {
    height: 100%;
    width: 100%;
}
</style>