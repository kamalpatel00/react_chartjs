import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';

const BarChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let listOfDays = [];
    let listOfAmounts = [];
    axios
      .get('http://private-4945e-weather34.apiary-proxy.com/weather34/rain')
      .then(res => {
        // console.log('fetched data:', res.data[0].days[]);
        const { days } = res.data[0];
        // console.log(days);
        days.forEach(({ day, amount }) => {
          console.log(day);
          console.log(amount);
          listOfDays.push(day);
          listOfAmounts.push(amount);
        });

        // res.map(data => <li>kkkk</li>);
        // for (const dataObj of res) {
        //   day.push(parseInt(dataObj.data.days[0]));
        //   amount.push(parseInt(dataObj.amount));
        // }
        setChartData({
          labels: listOfDays,
          datasets: [
            {
              label: '',
              data: listOfAmounts,
              backgroundColor: 'rgba(150, 0, 255, 0.5)',

              borderWidth: 4,
            },
          ],
        });
      })
      .catch(err => {
        // console.log(err);
      });
    console.log('kkk', listOfDays, listOfAmounts);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className='App'>
      {/* <h1>Rain Fall</h1> */}

      <Bar
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

export default BarChart;
