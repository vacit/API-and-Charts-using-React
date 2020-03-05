import React, { Component } from 'react';
import LineChart from './charts/LineChart';
import { getData } from './helpers';
import PieChart from './charts/PieChart';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionOne: {},
            optionTwo: {},
            pieOption: {},
            data: {},

        }
    }


    getNames = data => {
        let names = [];
        data.result.forEach(obj => {
            names.push(obj.hotelname)
        });
        return names
    }


    getDistribution = data => {
        let uniqueNames = [];
        let uniqueCount = [];

        const distribution = data.reduce((acum, cur) => Object.assign(acum, { [cur]: (acum[cur] | 0) + 1 }), {});
        for (let el in distribution) {
            if (distribution[el] > 20) {
                uniqueNames.push(el)
                uniqueCount.push(distribution[el])
            }
        }
        return {
            uniqueNames,
            uniqueCount
        }
    }

    getPieOption = (names, commentCount) => {
        let legendData = [];
        let seriesData = [];
        let selected = {};
        names.map((name, index) => {
            legendData.push(name);
            seriesData.push({
                name: name,
                value: commentCount[index]
            });
            selected[name] = index < 10;

        });
        return {
            legendData,
            seriesData,
            selected
        };

    }
    option = {
        title: {
            text: 'Statistics of Hotels Comments',
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
    componentDidMount() {
        getData('hotelname,baseprice,commentcount').then((data) => {
            const names = data.result.hotelname;
            const basePrice = data.result.baseprice;
            const commentCount = data.result.commentcount;
            const { uniqueNames, uniqueCount } = this.getDistribution(names);
            // console.log(names, basePrice, uniqueCount, data)
            const pieOption = this.getPieOption(uniqueNames, uniqueCount)
            console.log(pieOption)
            //#region 
            this.setState({
                optionOne: {
                    xAxis: {

                        type: 'category',
                        data: names,
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel: {
                            rotate: -90
                        }
                    },
                    yAxis: {
                        type: 'value',

                    },
                    series: [{
                        data: basePrice,
                        type: 'line'
                    }]
                },
                optionTwo: {
                    title: {
                        text: 'Hotels distribution',
                        subtext: 'Occurrence above 20 in the sample search result'
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
                        data: uniqueNames,


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
                            data: uniqueCount,
                            areaStyle: {
                                color: 'green'
                            }


                        }
                    ]
                },
                pieOption: {
                    ...this.option,
                    legend: {
                        ...this.option.legend,
                        data: pieOption.legendData,
                        selected: pieOption.selected
                    },
                    series: [
                        {
                            ...this.option.series[0],
                            data: pieOption.seriesData,
                        }
                    ]
                },
                data,
            })
            //#endregion
        })


    }


    render() {
        return (
            <div style={{'padding':'20px'}} className="App" >
                <header className="App-header">
                    <PieChart {...this.state.pieOption}></PieChart>
                    <LineChart {...this.state.optionTwo}></LineChart>
                    <LineChart {...this.state.optionOne}></LineChart>
                </header>
            </div>
        );
    }
}

export default App;
