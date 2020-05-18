import React, { Component } from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import axios from 'axios';

class Chart extends Component {
  state = {
    loading: false,
    days: [],
  };

  async componentDidMount() {
    // console.log('pre');

    const url =
      'http://private-4945e-weather34.apiary-proxy.com/weather34/rain';

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ days: data[0].days, loading: false });

    // console.log('post');
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.days ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>
              <li>
                <h1>Day Amount</h1>
              </li>
              {this.state.days.map(day => (
                <li>
                  {day.day} {day.amount}
                </li>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Chart;
