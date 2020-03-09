import React from 'react';
import ReactEcharts from 'echarts-for-react';

const PieChart = props => {
  return (
    <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'space-around',
    //     alignItems: 'center'
    //   }}
    >
      <ReactEcharts
        // className='col-lg-8 col-md-8 col-sm-10 col-12'
        className='py-4 px-1 bg-light '
        option={props}
        notMerge={true}
        lazyUpdate={true}
        // theme={'dark'}
        // showLoading ={true}
        style={{
          height: '90vh'
        }}
        // onChartReady={this.onChartReadyCallback}
        // onEvents={EventsDict}
        // opts={}
      />
      <br />
    </div>
  );
};

export default PieChart;
