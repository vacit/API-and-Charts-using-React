import React from 'react';
import ReactEcharts from 'echarts-for-react';
const LineChart = (props) => {


    return (
        <div>
            <ReactEcharts
                option={props}
                notMerge={true}
                lazyUpdate={true}
                // theme={'dark'}
                // showLoading ={true}
                style={{height: '400px', width: '100%'}}
                // onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            // opts={}
            />
           <br/>
        </div>
    );

}

export default LineChart;