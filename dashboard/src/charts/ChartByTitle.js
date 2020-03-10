import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';

// var rotation = 0;
// setInterval(function () {
//   myChart.setOption({
//       graphic: {
//           id: 'logo',
//           rotation: (rotation += Math.PI / 360) % (Math.PI * 2)
//       }
//   });
// }, 30);

const ChartByTitle = props => {
  // console.log('chart title props', props.data);
  // const [option, setOption] = useState({});
  // const [data0, setData0] = useState([]);
  // const [data1, setData1] = useState([]);
 
  // useEffect(() => {
  //   if (props.data.result) {
  //     const result = props.data.result;

  //     const keys = Object.keys(result);

  //     // console.log('result', result);
  //     // console.log('key0', keys[0]);
  //     // console.log('typeOf keys0', typeof keys[0]);
  //     const result0 = result[keys[0]];
  //     const result1 = result[keys[1]];
  //     // console.log('d0--d1', data0, data1);

      
  //     setData0(result0);
  //     setData1(result1);
  //   }
  // });
  return (
    <div>
      <ReactEcharts
        className='py-4 px-1 bg-light'
        option={props.option}
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

export default ChartByTitle;
