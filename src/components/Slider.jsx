import axios from 'axios';

import React, { useState, useEffect } from 'react';
import './Styles/slider.css';
function Slider({ min, max, onClicked }) {
  const [value, setValue] = useState(0);

  function onClick(e) {
    // console.log('e.target.value', e.target.value);
    // display(e.target.value);
    setValue(e.target.value);
    // var sliderValue = e.target.value;
    // var score;
    // axios
    //   .get('http://private-4945e-weather34.apiary-proxy.com/weather34/rain')
    //   .then(res => {
    //     // console.log('fetched data:', res.data[0].days[]);
    //     const { days } = res.data[0];
    //     // console.log(days);
    //     days.forEach(({ amount }) => {
    //       //Calculating acore value
    //       score =
    //         Math.log(amount + 1) *
    //         Math.log(sliderValue - 929) *
    //         Math.log(sliderValue - 9);
    //       // console.log('Score', score);

    //       //calculating mean, upper_bound and lower_bound value
    //       var mean = Math.min(Math.max(score, 0), 100);
    //       var upper_bound = Math.min(1.5 * mean, 100);
    //       var lower_bound = Math.max(0.5 * mean, 0);
    //       // console.log('mean', mean);
    //       // console.log('upper_bound', upper_bound);
    //       // console.log('lower_bound', lower_bound);
    //       return [(lower_bound, mean, upper_bound)];
    //     });
    //   });
  }
  useEffect(() => console.log(min, max), []);
  return (
    <div className='slideContainer'>
      <input
        className='slider'
        type='range'
        min={min}
        max={max}
        id='myRange'
        onChange={onClicked}
        onClick={onClick}
      />
      <p>
        value: <span className='value'>{value}</span>
      </p>
    </div>
  );
}
export default Slider;
