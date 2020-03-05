import React, { Component } from 'react';
import LineChart from './charts/LineChart';
import { getData } from './helpers'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionOne: {},
            optionTwo: {},
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


    hotelsCount = data => {
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

    componentDidMount() {
        getData('hotelname,baseprice').then((data) => {
            const names = data.result.hotelname;
            const basePrice = data.result.baseprice;
            const { uniqueNames, uniqueCount } = this.hotelsCount(names);
            // console.log(names, basePrice,uniqueCount)

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
                data,
            })
        })
        //#endregion

    }


    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <LineChart {...this.state.optionTwo}></LineChart>
                    <LineChart {...this.state.optionOne}></LineChart>
                </header>
            </div>
        );
    }
}

export default App;
