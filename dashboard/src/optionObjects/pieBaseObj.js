import AuthButton from '../components/AuthButton';

export const pieBaseObj = {
  title: {
    text: 'Comments Statistics',
    subtext: 'How many comment every hotel has',
    left: 'left'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b} : ({d}%) <br/> Comment : {c} '
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    top: '54%',
    // buttom: 'auto',
    left: '30%',
    // right: '50%',
    // width: 'auto',
    // height: '300',
    icon: 'circle',
    align: 'left',
    // selectedMode:'false',
    data: [],

    selected: {}
  },
  series: [
    {
      label: {
        alignTo: 'labelLine',
        margin: '10%'
      },
      type: 'pie',
      radius: '38%',
      center: ['50%', '30%'],
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
