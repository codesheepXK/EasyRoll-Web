
<template>
    <div class="showBox">
        <el-table :data="tableData" border style="width: 45%; height:39vh " 
            :header-cell-style="headerStyle" 
            :cell-style="{borderColor:'#000'}"
        >
            <el-table-column prop="className" label="班级" align="center"/>
            <el-table-column prop="no" label="学号" align="center"/>
            <el-table-column prop="name" label="姓名" align="center"/>
            <el-table-column prop="lateNum" label="缺课次数" align="center"/>
        </el-table>
        <div ref="chart1" style="width:45%;height:40vh"></div>
        <el-table :data="tableData" border style="width: 45%; height:39vh" 
            :header-cell-style="headerStyle" 
            :cell-style="{borderColor:'#000'}"
        >
            <el-table-column prop="className" label="班级" align="center"/>
            <el-table-column prop="no" label="学号" align="center"/>
            <el-table-column prop="name" label="姓名" align="center"/>
            <el-table-column prop="lateNum" label="缺课次数" align="center"/>
        </el-table>
        <div ref="chart2" style="width:45%;height:40vh"></div>
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
                "height":"50px"
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
                    legend: {},
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        data: ['计算机1班', '计算机2班', '计算机3班', '计算机4班', '计算机5班','计算机6班']
                    },
                    yAxis: {type: 'value'},
                    series: [
                        {
                            name:"到课",
                            data: [48, 46, 48, 47, 49,49],
                            type: 'bar',
                            stack: 'x',
                            color: 'rgb(112,162,252)',
                        },
                        {
                            name:"迟到",
                            data: [1, 2, 3, 2, 2,1],
                            type: 'bar',
                            stack: 'x',
                            color: 'rgb(208,86,79)',
                        },
                        {
                            name:"请假",
                            data: [3, 2, 1, 3, 2,2],
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
                    title: {
                        text: '总体情况',
                        left: 'center'
                    },
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
    watch: {},
    created(){
    }
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
    .el-table{
        margin:20px 0px; 
        border: solid 1px #000;
    }
}
</style>
  
  
  