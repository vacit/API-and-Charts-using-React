import React from 'react';
import ReactEcharts from 'echarts-for-react';

const PieChart = (props) => {
    return (
        <div>
            <ReactEcharts
                option={props}
                notMerge={true}
                lazyUpdate={true}
                // theme={'dark'}
                // showLoading ={true}
                style={{ height: '400px', width: '100%' }}
            // onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            // opts={}
            />
            <br />
        </div>
    );
};

export default PieChart;






const nameList = [
    'Zhao', 'Money', 'Sun', 'Li', 'Zhou', 'Wu', 'Zheng', 'Wang', 'Feng', 'Chen', 'Chu', 'Wei',
    'Jiang', 'Shen', 'Han', 'Yang', 'Zhu', 'Qin', 'You', 'Xu', 'He', 'Lu', 'Shi', 'Zhang',
    'Kong', 'Cao', 'Yan', 'Hua', 'Gold', 'Wei', 'Tao', 'Ginger', 'Qi', 'Xie', 'Zou', 'Yu',
    'Bai', 'Water', 'Sinus', 'Chapter', 'Cloud', 'Su', 'Pan', 'Ge', '奚', 'Fan', 'Peng', 'Lang',
    'Lu', 'Wei', 'Chang', 'Ma', 'Miao', 'Feng', 'Flower', 'Fang', 'Yu', 'Ren', 'Yuan', 'Liu',
    '酆', 'Bao', 'History', 'Tang', 'Fei', 'Lian', 'Cen', 'Xue', 'Lei', 'He', 'Ni', 'Tang',
    'Teng', 'Yin', 'Luo', 'Bi', 'Hao', '邬', '安', '常', '乐', '于', '时', 'FU',
    'Pi', '卞', 'qi', 'kang', 'wu', 'yu', 'yuan', 'bu', 'gu', 'meng', 'ping', 'huang',
    'He', 'Mu', 'Xiao', 'Yin', 'Yao', 'Shao', 'Zhan', 'Wang', 'Qi', 'Mao', 'Yu', 'Di',
    'M', 'bei', 'ming', 'zang', 'ji', 'fu', 'cheng', 'dai', 'talk', 'song', 'mao', 'pang',
    'Bear', 'Ji', 'Shu', 'Qu', 'Xiang', 'Zhu', 'Dong', 'Liang', 'Du', 'Ruan', 'Blue', 'Min',
    'Xi', 'Ji', 'Ma', 'Strong', 'Jia', 'Lu', 'Lou', 'Wang'
];
const genData = (count) => {

    let legendData = [];
    let seriesData = [];
    let selected = {};

    for (let i = 0; i < count; i++) {
        const name = Math.random() > 0.65
            ? makeWord(4, 1) + '·' + makeWord(3, 0)
            : makeWord(2, 1);
        legendData.push(name);
        seriesData.push({
            name: name,
            value: Math.round(Math.random() * 100000)
        });
        selected[name] = i < 6;
    }

    return {
        legendData: legendData,
        seriesData: seriesData,
        selected: selected
    };

}

const makeWord = (max, min) => {
    const nameLen = Math.ceil(Math.random() * max + min);
    const name = [];
    for (let i = 0; i < nameLen; i++) {
        name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
    }
    return name.join('');
}

const data = genData(50);


export const option = {
    title: {
        text: 'Statistics of the same name',
        subtext: 'Pure fiction',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: data.legendData,

        selected: data.selected
    },
    series: [
        {
            name: 'Name',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: data.seriesData,
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