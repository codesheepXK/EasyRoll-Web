
<template>
    <div class="showBox">
        <div class="box box1">
            <h1>缺课次数</h1>
            <el-table :data="tableData"  border style="width: 95%; height:32.5vh"  
                :header-cell-style="headerStyle" 
                :cell-style="{borderColor:'#000'}"
            >
                <el-table-column prop="className" label="班级" align="center"/>
                <el-table-column prop="no" label="学号" align="center"/>
                <el-table-column prop="name" label="姓名" align="center"/>
                <el-table-column prop="lateNum" label="缺课次数" align="center"/>
            </el-table>
        </div>
        <div class="box box2">
            <h1>班级情况</h1>
            <div ref="chart1" style="width:90%;height:38vh"></div>
        </div>
        <div class="box box3">
            <h1>课程情况</h1>
            <el-table :data="tableData" border style="width: 95%; height:32.5vh" 
                :header-cell-style="headerStyle" 
                :cell-style="{borderColor:'#000'}"
            >
                <el-table-column prop="className" label="班级" align="center"/>
                <el-table-column prop="no" label="学号" align="center"/>
                <el-table-column prop="name" label="姓名" align="center"/>
                <el-table-column prop="lateNum" label="缺课次数" align="center"/>
            </el-table>
        </div>
        <div class="box box4">、
            <h1>总体情况</h1>
            <div ref="chart2" style="width:90%;height:40vh"></div>
        </div>  
    </div>

</template>
  
<script>
import * as echarts from 'echarts';
export default {
    data() {
        return{
            tableData:[
                {
                    className: '计算机1班',
                    no: '',
                    name: '',
                    lateNum: 0,
                },
                {
                    className: '计算机2班',
                    no: '',
                    name: '',
                    lateNum: 0,
                },
                {
                    className: '计算机3班',
                    no: '',
                    name: '',
                    lateNum: 0,
                },
                {
                    className: '计算机4班',
                    no: '',
                    name: '',
                    lateNum: 0,
                },
                {
                    className: '计算机5班',
                    no: '',
                    name: '',
                    lateNum: 0,
                },
                {
                    className: '计算机6班',
                    no: '',
                    name: '',
                    lateNum: 0,
                },
                {
                    className: '大数据1班',
                    no: '',
                    name: '',
                    lateNum: 0,
                },
            ],
            headerStyle : {
                "text-align":"center",
                "font-weight":"bold",
                "color":"#000",
                "background-color":"rgb(232,232,232)",
                "border-color":"#000",
                "height":"40px"
            }
        }
    },
    mounted() {
        this.getEchartData1();
        this.getEchartData2();
    },
    methods: {
        getEchartData1() {
            const chart = this.$refs.chart1
            if (chart) {
                const myChart = echarts.init(chart)
                const option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                        // Use axis to trigger tooltip
                            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                        }
                    },
                    legend: {
                        // Try 'horizontal'
                        orient: 'horizontal',
                        top: "20px"
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: ['计算机1班', '计算机2班', '计算机3班', '计算机4班', '计算机5班','计算机6班',"大数据1班"]
                    },
                    yAxis: {type: 'value'},
                    series: [
                        
                        {
                            name:"到课",
                            data: [48, 46, 48, 47, 49,49,51],
                            type: 'bar',
                            stack: 'x',
                            color: 'rgb(112,162,252)',
                        },
                        {
                            name:"迟到",
                            data: [1, 2, 3, 2, 2,1,2],
                            type: 'bar',
                            stack: 'x',
                            color: 'rgb(208,86,79)',
                        },
                        {
                            name:"请假",
                            data: [3, 2, 1, 3, 2,2,1],
                            type: 'bar',
                            stack: 'x',
                            color: 'rgb(88,165,92)',          
                        }
                    ]
                };
                myChart.setOption(option)
            }
        }, 
        getEchartData2(){
            const chart = this.$refs.chart2
            if (chart) {
                const myChart = echarts.init(chart)
                const option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b} : {c} ({d}%)'
                    },
                    series: [{
                        type: 'pie',
                        data: [
                            {
                                value: 300,
                                name: '到课'
                            },
                            {
                                value: 29,
                                name: '请假'
                            },
                            {
                                value: 31,
                                name: '缺课',
                            }
                        ]
                    }]
                };
                myChart.setOption(option)
            } 
        }
    },
}
</script>
  
<style lang="scss" scoped>
.showBox{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 90vh;
    overflow: auto;
    .box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 45vh;
        h1{
            color: rgb(70,70,70);
            font-size: 25px;
            font-weight: bold;
        }
    }
    .box1{
        border-right: 0.5px  solid #999;
        border-bottom:  0.5px  solid #999;
    }
    .box2{
        border-left: 0.5px  solid #999;
        border-bottom:  0.5px  solid #999;
    }
    .box3{
        border-top: 0.5px  solid #999;
        border-right:  0.5px  solid #999;
    }
    .box4{
        border-top: 0.5px  solid #999;
        border-left:  0.5px  solid #999;
    }
    .el-table{
        margin:20px 0px; 
        border: solid 1px #000;
    }
}
</style>
  
  
  