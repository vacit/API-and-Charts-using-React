import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option: {},
            names: [],
            prices: []
        }
    }

    componentDidMount() {
        this.getHotels().then((data) => {
            const result = data.result;
            let names = []
            let bestPrice = []
            result.forEach(element => {
                names.push(element.hotelname)
                bestPrice.push(element.bestbaseprice)
            });
            let option = {
                xAxis: {
                    type: 'category',
                    data: names
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: bestPrice,
                    type: 'line'
                }]
            };
            this.setState({
                option: option,
                names: names,
                prices: bestPrice
            })
            console.log(this.state.names)
            console.log(this.state.prices)
        })
    }

    getHotels = () => {
        return fetch('http://localhost:3000/hotels/')
            .then((response) => response.json())
    };
    render() {
        return (
            <div>
                <ReactEcharts
                    option={this.state.option}
                    notMerge={true}
                    lazyUpdate={true}
                    theme={'theme_name'}
                // onChartReady={this.onChartReadyCallback}
                // onEvents={EventsDict}
                // opts={}
                />
                {this.state.names.map((el) => <div>{el}</div>)}
                {this.state.prices.map((el) => <div>{el}</div>)}
            </div>
        );
    }
}

export default LineChart;