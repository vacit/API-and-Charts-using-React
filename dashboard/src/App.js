import React, { Component } from 'react';
import './App.css';
import LineChart from './charts/LineChart';
import { getData } from './helpers';
import PieChart from './charts/PieChart';
import { pieBaseObj } from './optionObjects/pieBaseObj';
import { lineBaseObj } from './optionObjects/lineBaseObj';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import LoginPage from './components/Login';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRouter';
import SelectMenu from './components/SelectMenu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieOption: {},
      lineOption1: {},
      lineOption2: {},
      data: {},
      isAuthenticated: false,
      tableTitles: {},
      loading: 'initial'
    };
    // this.name = 'test';
    this.email = 'test@test.com';
    this.password = 'test';
  }
  authenticate = ({ email, password }) => {
    if (email === this.email && password === this.password) {
      this.setState({
        isAuthenticated: true
      });
    }
  };
  signout = () => {
    this.setState({
      isAuthenticated: false
    });
  };

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
  async componentDidMount() {
    this.setState({ loading: 'true' });
    const data = await getData('hotelname,baseprice,commentcount');
    const names = data.result.hotelname;
    const basePrice = data.result.baseprice;
    const commentCount = data.result.commentcount;
    const { uniqueNames, uniqueCount } = this.getDistribution(names);
    // console.log(names, basePrice, uniqueCount, data)
    const pieOption = this.getPieOption(uniqueNames, uniqueCount);
    let tableTitles = data.tableTitles.map((title, i) => {
      let dataObj = {
        value: title,
        label: title
      };
      return dataObj;
    });
    // console.log(tableTitles)
    //#region setState
    this.setState(
      {
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
        loading: 'false',
        data,
        tableTitles
      }
      // ,
      // () => console.log(data.tableTitles)
    );
    //#endregion
  }

  render() {
    const authObj = {
      isAuthenticated: this.state.isAuthenticated,
      authenticate: this.authenticate,
      signout: this.signout
    };
    if (this.state.loading === 'initial') {
      return <h2>Intializing...</h2>;
    }
    if (this.state.loading === 'true') {
      return (
        <div>
          <h2>Loading...</h2>
          <div className=' m-5 p-5 spinner-grow text-success'></div>
        </div>
      );
    }
    // console.log('App render', typeof this.state.data.tableTitles);
    return (
      <Router>
        <div className='App'>
          <Nav authObj={authObj}></Nav>
          <Switch>
            <Route exact path='/'>
              <LoginPage authObj={authObj} />
            </Route>

            <Route path='/login'>
              <LoginPage authObj={authObj} />
            </Route>

            <PrivateRoute authObj={authObj} path='/piechart'>
              <SelectMenu tableTitles={this.state.tableTitles} />
              <PieChart {...this.state.pieOption} />
            </PrivateRoute>

            <PrivateRoute authObj={authObj} path='/linechart1'>
              <LineChart {...this.state.lineOption1} />
            </PrivateRoute>

            <PrivateRoute authObj={authObj} path='/linechart2'>
              <LineChart {...this.state.lineOption2} />
            </PrivateRoute>

            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
