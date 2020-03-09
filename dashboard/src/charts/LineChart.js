import React from 'react';
import ReactEcharts from 'echarts-for-react';

const LineChart = props => {
  return (
    <div>
      <ReactEcharts
        className='py-4 px-1 bg-light'
        option={props}
        notMerge={true}
        lazyUpdate={true}
        // theme={'dark'}
        // showLoading ={true}
        style={{ height: '50vh' }}
        // onChartReady={this.onChartReadyCallback}
        // onEvents={EventsDict}
        // opts={}
      />
      <br />
    </div>
  );
};

export default LineChart;
