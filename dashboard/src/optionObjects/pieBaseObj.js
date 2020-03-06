export const pieBaseObj = {
    title: {
        text: 'Comments Statistics',
        subtext: 'How many comment every hotel has',
        left: 'left'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : ({d}%) <br/> Comment : {c} ',
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: [],

        selected: {}
    },
    series: [
        {
            type: 'pie',
            radius: '80%',
            center: ['40%', '50%'],
            data: [],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};