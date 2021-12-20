<template>
  <div>
    <div id="main" style="width: 500px; height: 500px"></div>
    <br />
    <h1>指令方式</h1>
    <div v-echarts="option" style="width: 500px;height: 500px;"></div>
    <br />
    <h1>象限</h1>
    <div id="xy" style="width: 1500px;height: 500px;"></div>
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
      marksData: [
        {
          name: '点1',
          value: [10, 20],
        },
        {
          value: [15, 22],
        },
        {
          name: '点3',
          value: [34, 51],
        },
        {
          name: '点4',
          value: [25, 64],
        },
        {
          name: '点5',
          value: [42, 20],
        },
        {
          name: '点6',
          value: [32, 15],
        },
        {
          name: '点7',
          value: [68, 34],
        },
        {
          name: '点8',
          value: [25, -65],
        },
        {
          name: '点9',
          value: [45, 56],
        },
        {
          name: '点10',
          value: [35, 10],
        },
      ],
      centerLine: [
        {
          name: 'y',
          xAxis: 40,
        },
        {
          name: 'x',
          yAxis: 40,
        },
      ],
      centerMark: [
        {
          value: '中心点',
          coord: [40, 40],
        },
      ],
    };
  },
  directives: {
    echarts: V_Echarts,
  },
  created() {
    window.change = this.change;
    console.log(this.$options);
  },
  methods: {
    change(item) {
      console.log('哈哈', item);
    },
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));
      var xy = echarts.init(document.getElementById('xy'));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '某地区蒸发量和降水量',
          subtext: '纯属虚构',
        },
        tooltip: {
          trigger: 'item',
          triggerOn: `mousemove`,
          enterable: true,
          hideDelay: 800,
          formatter: (parm) => {
            console.log(parm);
            let data = parm.data;
            return `<div style="pointer-events: all;line-height: 24px; border-radius: 2px; background: #fff; color: #736AF2;padding: 0 6px; margin-top: 5px; text-align: center;" onclick="change(${data})">${parm.seriesName} ></div>`;
          },
        },
        legend: {
          data: ['蒸发量', '降水量'],
        },
        dataZoom: [
          {
            type: 'inside',
            start: 70,
            end: 100,
          },
          {
            start: 70,
            end: 100,
          },
        ],
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
            name: 'X轴',
            nameTextStyle: {
              color: 'green',
              fontSize: 16,
              padding: 10,
            },
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
            id: '0759',
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
                trigger: 'item',
                formatter: '我是tooltip',
              },
            },
            markLine: {
              data: [{ type: 'average', name: '平均值' }],
            },
          },
        ],
      };

      var option2 = {
        dataZoom: [
          // {
          //   type: 'slider',
          //   show: true,
          //   xAxisIndex: [0],
          //   start: 0,
          //   end: 100
          // },
          // {
          //   type: 'slider',
          //   show: true,
          //   yAxisIndex: [0],
          //   left: '93%',
          //   start: 0,
          //   end: 100
          // },
          {
            type: 'inside',
            // xAxisIndex: [0],
            start: 0,
            end: 100,
          },
          {
            type: 'inside',
            // yAxisIndex: [0],
            start: 0,
            end: 100,
          },
        ],
        tooltip: {
          axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
              type: 'dashed',
              width: 1,
            },
            label: {
              backgroundColor: '#000',
            },
          },
        },
        grid: {
          left: 50,
          right: 50,
          bottom: '4%',
          top: '6%',
          containLabel: true,
        },
        xAxis: {
          scale: true,
          axisLine: {
            lineStyle: {
              color: '#ddd',
            },
          },
          axisLabel: {
            color: '#666',
          },
          splitLine: {
            lineStyle: {
              color: '#eee',
            },
          },
        },
        yAxis: {
          scale: true,
          axisLine: {
            lineStyle: {
              color: '#ddd',
            },
          },
          axisLabel: {
            color: '#666',
          },
          splitLine: {
            lineStyle: {
              color: '#eee',
            },
          },
        },
        series: [
          {
            type: 'scatter',
            data: this.marksData,
            label: {
              show: false,
              position: 'bottom',
              formatter: '{b}',
            },
            itemStyle: {
              shadowBlur: 2,
              shadowColor: 'rgba(120, 36, 50, 0.5)',
              shadowOffsetY: 1,
              color: function(e) {
                let randomColor =
                  'rgba(' +
                  Math.floor(Math.random() * 240) +
                  ',' +
                  Math.floor(Math.random() * 240) +
                  ',' +
                  Math.floor(Math.random() * 240) +
                  ',' +
                  '.8' +
                  ')';
                return randomColor.substring();
              },
            },
            // 各象限区域
            markArea: {
              silent: true,
              data: [
                // 第一象限
                [
                  {
                    name: '第一象限',
                    xAxis: 40, // x 轴开始位置
                    yAxis: 90, // y 轴结束位置(直接取最大值)
                    itemStyle: {
                      color: 'rgba(56, 180, 139, .1)',
                    },
                    label: {
                      position: 'inside',
                      color: 'rgba(0, 0, 0, .1)',
                      fontSize: 22,
                    },
                  },
                  {
                    yAxis: 40, // y轴开始位置
                  },
                ],
                // 第二象限
                [
                  {
                    name: '第二象限',
                    yAxis: 70, // y 轴结束位置(直接取最大值)
                    itemStyle: {
                      color: 'rgba(68, 97, 123, .1)',
                    },
                    label: {
                      position: 'inside',
                      color: 'rgba(0, 0, 0, .1)',
                      fontSize: 22,
                    },
                  },
                  {
                    xAxis: 40, // x 轴结束位置
                    yAxis: 40, // y轴开始位置
                  },
                ],
                // 第三象限
                [
                  {
                    name: '第三象限',
                    yAxis: 40, // y 轴结束位置
                    itemStyle: {
                      color: 'rgba(191, 120, 58, .1)',
                    },
                    label: {
                      position: 'inside',
                      color: 'rgba(0, 0, 0, .1)',
                      fontSize: 22,
                    },
                  },
                  {
                    xAxis: 40, // x 轴结束位置
                    yAxis: 10, // y轴开始位置
                  },
                ],
                // 第四象限
                [
                  {
                    name: '第四象限',
                    xAxis: 40, // x 轴开始位置
                    yAxis: 40, // y 轴结束位置
                    itemStyle: {
                      color: 'rgba(116, 83, 153, .1)',
                    },
                    label: {
                      position: 'inside',
                      color: 'rgba(0, 0, 0, .1)',
                      fontSize: 22,
                    },
                  },
                  {
                    yAxis: 10, // y轴开始位置
                  },
                ],
              ],
            },
            // 中心点交集象限轴
            markLine: {
              silent: true, // 是否不响应鼠标事件
              precision: 2, // 精度
              lineStyle: {
                type: 'solid',
                color: '#00aca6',
              },
              label: {
                color: '#00aca6',
                position: 'end',
                formatter: '{b}',
              },
              data: this.centerLine,
            },
            // 中心点
            markPoint: {
              symbol: 'roundRect',
              symbolSize: 15,
              itemStyle: {
                color: 'rgba(234, 85, 6, .8)',
              },
              label: {
                position: 'top',
              },
              data: this.centerMark,
            },
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      xy.setOption(option2);
    },
  },
  mounted() {
    this.myEcharts();
  },
};
</script>

<style></style>
