import './App.css';
import Chart from './components/Chart';
import BarChart from './components/BarChart';
import Slider from './components/Slider';
import { Row, Col, Container } from 'react-bootstrap';
import LineChart from './components/LineChart';

import React, { useState, useEffect } from 'react';

export default function App() {
  const [pressure, setPressure] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const callback = e => {
    const val = e.target.value;
    if (val >= 970 && val <= 1030) setPressure(val);
    if (val >= 10 && val <= 35) setTemperature(val);
  };

  return (
    <div className='App'>
      <Container className='container'>
        <Row className='top-row'>
          <Col className='top-slider'>
            <Slider min={970} max={1070} onClicked={callback} />
          </Col>
          <Col className='top-chart'>
            {' '}
            <BarChart data='Line' />
          </Col>
        </Row>
        <Row>
          <Col className='bottom-slider'>
            <Slider min={10} max={35} onClicked={callback} />
          </Col>
          <Col className='bottom-chart'>
            <LineChart
              currentTemperature={temperature}
              currentPressure={pressure}
            />
          </Col>
        </Row>
      </Container>

      {/* <Chart /> */}
      {/* <div className='grid-container'>
        <div className='BarChart'>
         
        </div>
        <div className='Slider-top'>
          <Slider />
        </div>
        <div className='Slider-bottom'>
          {' '}
          
        </div>
        <div className='Chart-bottom'>
         
        </div>
      </div> */}
    </div>
  );
}
