import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactEcharts from 'echarts-for-react';

function App() {
    let option = {
        
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 335, name: '直接访问' },
                    { value: 310, name: '邮件营销' },
                    { value: 234, name: '联盟广告' },
                    { value: 135, name: '视频广告' },
                    { value: 1548, name: '搜索引擎' }
                ]
            }
        ]
    };
    return (
        <div className="App">
            <header className="App-header">
                <ReactEcharts
                    option={option}
                    notMerge={true}
                    lazyUpdate={true}
                    theme={'theme_name'}
                    // onChartReady={this.onChartReadyCallback}
                    // onEvents={EventsDict}
                    // opts={}
                />
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                {/* <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p> */}
                {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a> */}
            </header>
        </div>
    );
}

export default App;
