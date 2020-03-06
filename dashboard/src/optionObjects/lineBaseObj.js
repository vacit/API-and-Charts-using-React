export const lineBaseObj = {
    title: {
        text: 'Distribution',
        subtext: 'Occurrence above 20 in a sample search result'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                show: false
            }
        },
        formatter: '{b0}<br /> Total: {c0} Entries found',
        position: function (pos, params, el, elRect, size) {
            var obj = { top: 60 };
            obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 80;
            return obj;
        },
    },

    xAxis: {

        nameLocation: 'center',
        type: 'category',
        data: [],


        axisLabel: {
            show: false,
        }
    },
    yAxis: {
        type: 'value',
    },
    lineStyle: {
        color: 'green'
    },
    series: [
        {
            name: 'Repetition',
            type: 'line',
            smooth: true,
            data: [],
            areaStyle: {
                color: 'green'
            }


        }
    ]
};