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
            names: [],
            values: [],
        }
    }

    // fetchData = () => {
    //     let options = {
    //         names: [],
    //         bestPrice: []
    //     }
    //     return getData().then((data) => {
    //         const result = data.result;

    //         result.forEach(obj => {
    //             options.names = [...options.names, obj.hotelname]
    //             options.bestPrice = [...options.bestPrice, obj.bestbaseprice]
    //         });
    //         return options;
    //     })
    // }



    getNames = data => {
        let names = [];
        data.result.forEach(obj => {
            names.push(obj.hotelname)
        });
        return names
    }


    hotelsCount = data => {
        // let hotelsCount = {};
        let hotelsCount = [];
        let hotelsNames = [];

        const distribution = data.reduce((acum, cur) => Object.assign(acum, { [cur]: (acum[cur] | 0) + 1 }), {});
        // console.log(distribution);
        // hotelsCountArr = [...new Set(data)];
        for (let el in distribution) {
            // console.log(distribution[el])
            if (distribution[el] > 20) {
                hotelsNames.push(el)
                hotelsCount.push(distribution[el])
            }
        }
        console.log(hotelsNames, hotelsCount)
        // console.log(distribution)
        return {
            hotelsNames,
            hotelsCount
        }
    }
    // getUniqCount = data => {
    //     let hotelNames = this.getNames(data);
    //     return [...new Set(hotelNames)];
    // }


    componentDidMount() {
        // getData().then((data) => {
        // console.log(data.result)

        getData('hotelname,baseprice').then((data) => {
            const names2 = data.result.hotelname;
            const values2 = data.result.baseprice;

            const { hotelsNames, hotelsCount } = this.hotelsCount(names2)

            // console.log(names2, values2)

            //#region 
            this.setState({
                optionOne: {
                    xAxis: {

                        type: 'category',
                        data: hotelsNames,
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel: {
                            // interval:5,
                            rotate: 90
                        }
                        // min:-20,
                        // max:10,
                        // scale:true
                    },
                    yAxis: {
                        type: 'value',
                        data: hotelsCount,
                        // scale:true,
                    },
                    series: [{
                        data: hotelsCount,
                        type: 'line'
                    }]
                },
                optionTwo: {
                    title: {
                        text: 'Hotels distribution',
                        subtext: 'Occurrence count in sample search result'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            // snap:true,
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
                    // toolbox: {
                    //     show: false,
                    //     feature: {
                    //         saveAsImage: {}
                    //     }
                    // },
                    xAxis: {
                        name: 'abce',
                        nameLocation: 'center',
                        type: 'category',
                        // boundaryGap: false,
                        data: hotelsNames,

                        // axisTick: {
                        //     alignWithLabel: true
                        // },
                        axisLabel: {
                            show: false,
                            // interval:5,
                            rotate: 90
                        }
                    },
                    yAxis: {
                        type: 'value',
                        // axisLabel: {
                        //     formatter: '{value} W'
                        // },
                        // axisPointer: {
                        //     snap: true
                        // },
                        // axisTick: { 
                        //     interval : 0
                        //  }
                    },
                    lineStyle: {
                        color: 'green'
                    },

                    // visualMap: {
                    //     show: false,
                    //     dimension: 0,
                    //     pieces: [{
                    //         lte: 6,
                    //         color: 'blue'
                    //     }, {
                    //         gt: 6,
                    //         lte: 10,
                    //         color: 'red'
                    //     }, {
                    //         gt: 8,
                    //         lte: 14,
                    //         color: 'green'
                    //     }, {
                    //         gt: 14,
                    //         lte: 17,
                    //         color: 'red'
                    //     }, {
                    //         gt: 17,
                    //         color: 'green'
                    //     }]
                    // },
                    // dataZoom: [
                    //     {
                    //         type: 'inside',
                    //         xAxisIndex: [0, 1],
                    //         start: 98,
                    //         end: 100
                    //     },
                    //     {
                    //         show: true,
                    //         xAxisIndex: [0, 1],
                    //         type: 'slider',
                    //         top: '85%',
                    //         start: 98,
                    //         end: 100
                    //     }
                    // ],
                    series: [
                        {
                            name: 'Repetition',
                            type: 'line',
                            smooth: true,
                            data: hotelsCount,
                            areaStyle: {
                                color: 'green'
                            }

                            // markArea: {
                            //     data: [[{
                            //         name: 'amm',
                            //         yAxis: '0'
                            //     }, {
                            //         yAxis: '2'
                            //     }],

                            //     ]
                            // }
                        }
                    ]
                },
                data,
                names: hotelsNames,
                values: hotelsCount
            })
        })
        //#endregion

    }




    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    {/* <LineChart {...this.state.optionOne}></LineChart> */}
                    <LineChart {...this.state.optionTwo}></LineChart>
                </header>
            </div>
        );
    }
}

export default App;
