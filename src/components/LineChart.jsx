import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';

const LineChart = ({ currentTemperature, currentPressure }) => {
  const [chartData, setChartData] = useState({});
  // console.log(currentPressure, currentTemperature);
  const [data, setData] = useState([]);
  let means = [];
  let upper_bounds = [];
  let lower_bounds = [];

  const chanceOfRain = amount => {
    means = [];
    upper_bounds = [];
    lower_bounds = [];
    data.forEach(({ amount }, i) => {
      console.log(amount);
      let score =
        Math.log(amount + 1) *
        Math.log(currentPressure - 929) *
        Math.log(currentTemperature - 9);

      //calculating mean, upper_bound and lower_bound value
      let mean = Math.min(Math.max(score, 0), 100);
      let upper_bound = Math.min(1.5 * mean, 100);
      let lower_bound = Math.max(0.5 * mean, 0);

      means.push(mean);
      upper_bounds.push(upper_bound);
      lower_bounds.push(lower_bound);
    });
    console.log(means, upper_bounds, lower_bounds);
    if (means[0] && upper_bounds[0] && lower_bounds[0]) {
      setChartData({
        // labels: [1, 78, 3, 4, 5, 6, 7],
        datasets: [
          {
            label: 'upper bound',
            data: upper_bounds,
            backgroundColor: 'rgba(0, 140, 255, 0.5)',
            borderWidth: 4,
            fill: true,
          },
          {
            label: 'Mean',
            data: means,
            borderColor: '#fff',
            backgroundColor: 'rgba(255, 0, 17, 0.5)',
            borderWidth: 4,
            fill: true,
          },
          {
            label: 'Lower bound',
            data: lower_bounds,
            borderColor: '18, 17, 17',
            backgroundColor: 'rgba(13, 224, 31, 0.5)',
            borderWidth: 4,
            fill: true,
          },
        ],
      });
    }
  };

  const fetch = () => {
    axios
      .get('http://private-4945e-weather34.apiary-proxy.com/weather34/rain')
      .then(res => {
        const { days } = res.data[0];
        // data = days;
        setData(days);
      });
  };

  const chart = () => {
    let listOfDays = [];
    let listOfAmounts = [];
    axios
      .get('http://private-4945e-weather34.apiary-proxy.com/weather34/rain')
      .then(res => {
        const { days } = res.data[0];
        days.forEach(({ day, amount }) => {
          listOfDays.push(day);
          listOfAmounts.push(amount);
        });

        setChartData({
          labels: listOfDays,
          datasets: [
            {
              label: '',
              data: listOfAmounts,
              backgroundColor: 'rgba(150, 0, 122, 0.5)',
              fill: false,
              borderWidth: 4,
            },
          ],
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
    fetch(); // rain forecast
  }, []);

  useEffect(() => {
    chanceOfRain();
    // chart();
  }, [currentPressure, currentTemperature]);

  return (
    <div className='App'>
      <Line
        data={chartData}
        options={{
          responsive: true,
          title: { text: 'Rain Fall', display: true },
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                  beginAtZero: true,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default LineChart;
