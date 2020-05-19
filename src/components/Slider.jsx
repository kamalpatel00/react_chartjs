import React, { useState, useEffect } from 'react';
import './Styles/slider.css';
function Slider({ min, max, display }) {
  const [value, setValue] = useState(0);
  function handler(e) {
    // console.log(e.target.value);
    setValue(e.target.value);
    // console.log(min, max);
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
        onChange={handler}
      />
      <p>
        value: <span className='value'>{value}</span>
      </p>
    </div>
  );
}
export default Slider;
