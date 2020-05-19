import './App.css';
import Chart from './components/Chart';
import BarChart from './components/BarChart';
import Slider from './components/Slider';
import { Row, Col, Container } from 'react-bootstrap';
import LineChart from './components/LineChart';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <Container className='container'>
          <Row className='top-row'>
            <Col className='top-slider'>
              <Slider min={970} max={1070} />
            </Col>
            <Col className='top-chart'>
              {' '}
              <BarChart data='Line' />
            </Col>
          </Row>
          <Row>
            <Col className='bottom-slider'>
              <Slider min={10} max={35} />
            </Col>
            <Col className='bottom-chart'>
              <LineChart />
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
}

export default App;
