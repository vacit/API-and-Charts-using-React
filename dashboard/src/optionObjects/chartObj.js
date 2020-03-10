export const chartObj = {
    color: ['#8EC9EB'],
    legend: {
      data: []
    },
    tooltip: {
      trigger: 'axis',
      formatter: 'Temperature : <br/>{b}km : {c}°C'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      splitLine: {
        show: false
      },
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    yAxis: {
      type: 'category',
      axisLine: { onZero: false },
      axisLabel: {
        formatter: '{value} km'
      },
      boundaryGap: true,
      data: []
    },
    graphic: [
      {
        type: 'image',
        id: 'logo',
        right: 20,
        top: 20,
        z: -10,
        bounding: 'raw',
        origin: [75, 75]
      },
      {
        type: 'group',
        left: '10%',
        top: 'center',
        children: [
          {
            type: 'rect',
            z: 100,
            left: 'center',
            top: 'middle',
            shape: {
              width: 190,
              height: 90
            },
            style: {
              fill: '#fff',
              stroke: '#555',
              lineWidth: 2,
              shadowBlur: 8,
              shadowOffsetX: 3,
              shadowOffsetY: 3,
              shadowColor: 'rgba(0,0,0,0.3)'
            }
          },
          {
            type: 'text',
            z: 100,
            left: 'center',
            top: 'middle',
            style: {
              fill: '#333',
              text: [
                '横轴表示温度，单位是°C',
                '纵轴表示高度，单位是km',
                '右上角有一个图片做的水印',
                '这个文本块可以放在图中各',
                '种位置'
              ].join('\n'),
              font: '14px Microsoft YaHei'
            }
          }
        ]
      }
    ],
    series: [
      {
        name: '高度(km)与气温(°C)变化关系',
        type: 'bar',
        smooth: true,
        barCategoryGap: 25,
        lineStyle: {
          width: 3,
          shadowColor: 'rgba(0,0,0,0.4)',
          shadowBlur: 10,
          shadowOffsetY: 10
        },
        data: []
      }
    ]
  }