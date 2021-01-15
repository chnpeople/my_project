<template>
  <div>
    <div id="main"
         style="width: 500px; height: 500px">
    </div>
    <br>
    <h1>指令方式</h1>
    <div v-echarts="option"
         style="width: 500px;height: 500px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
import V_Echarts from '../directives/echarts';
export default {
  data() {
    return {
      option: {
        title: {
          text: 'ECharts 入门示例',
        },
        tooltip: {},
        legend: {
          data: ['销量'],
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  },
  directives: {
    echarts: V_Echarts,
  },
  created() {
    console.log(this.$options);
  },
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '某地区蒸发量和降水量',
          subtext: '纯属虚构',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['蒸发量', '降水量'],
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3,
            ],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' },
              ],
              tooltip: {
                trigger: "item",
                formatter: '我是tooltip'
              }
            },
            markLine: {
              data: [{ type: 'average', name: '平均值' }],
            },
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    this.myEcharts();
  },
};
</script>

<style>
</style>