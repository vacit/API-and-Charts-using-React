import React, { Component } from 'react';
import './App.css';
import LineChart from './charts/LineChart';
import { getData } from './helpers';
import PieChart from './charts/PieChart';
import { pieBaseObj } from './optionObjects/pieBaseObj';
import { lineBaseObj } from './optionObjects/lineBaseObj';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Nav from './Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieOption: {},
      lineOption1: {},
      lineOption2: {},
      data: {}
    };
  }

  getNames = data => {
    let names = [];
    data.result.forEach(obj => {
      names.push(obj.hotelname);
    });
    return names;
  };

  getDistribution = data => {
    let uniqueNames = [];
    let uniqueCount = [];

    const distribution = data.reduce(
      (acum, cur) => Object.assign(acum, { [cur]: (acum[cur] | 0) + 1 }),
      {}
    );
    for (let el in distribution) {
      if (distribution[el] > 20) {
        uniqueNames.push(el);
        uniqueCount.push(distribution[el]);
      }
    }
    return {
      uniqueNames,
      uniqueCount
    };
  };

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
  };

  componentDidMount() {
    getData('hotelname,baseprice,commentcount').then(data => {
      const names = data.result.hotelname;
      const basePrice = data.result.baseprice;
      const commentCount = data.result.commentcount;
      const { uniqueNames, uniqueCount } = this.getDistribution(names);
      // console.log(names, basePrice, uniqueCount, data)
      const pieOption = this.getPieOption(uniqueNames, uniqueCount);
      console.log(pieOption);
      //#region setState
      this.setState({
        pieOption: {
          ...pieBaseObj,
          legend: {
            ...pieBaseObj.legend,
            data: pieOption.legendData,
            selected: pieOption.selected
          },
          series: [
            {
              ...pieBaseObj.series[0],
              data: pieOption.seriesData
            }
          ]
        },
        lineOption1: {
          ...lineBaseObj,
          xAxis: {
            ...lineBaseObj.xAxis,
            data: uniqueNames
          },
          series: [
            {
              ...lineBaseObj.series[0],
              data: uniqueCount
            }
          ]
        },
        lineOption2: {
          title: {
            text: 'Base Price',
            subtext: 'Hotels base price in a sample search result'
          },
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
            type: 'value'
          },
          series: [
            {
              data: basePrice,
              type: 'line'
            }
          ]
        },

        data
      });
      //#endregion
    });
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Nav></Nav>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route
              path='/piechart'
              render={props => (
                <PieChart {...props} {...this.state.pieOption} />
              )}
            />
            <Route
              path='/linechart1'
              render={props => (
                <PieChart {...props} {...this.state.lineOption1} />
              )}
            />
            <Route
              path='/linechart2'
              render={props => (
                <PieChart {...props} {...this.state.lineOption2} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
