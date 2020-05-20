import React, { useState, useEffect } from 'react';
import './Styles/slider.css';
function Slider({ min, max, onClicked }) {
  const [value, setValue] = useState(0);

  function onClick(e) {
    // console.log('e.target.value', e.target.value);
    // display(e.target.value);
    setValue(e.target.value);
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
