import React, { Component } from 'react';
import c3 from 'c3';
// import styles from './ChartComponent.css';

class ChartComponent extends Component {

  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate(prevProps, prevState) {
    
  }

  updateChart() {
    c3.generate({
      bindTo: '#chart',
      data: {
        columns: [
          ['My Numbers', 30, 200, 90, 400, 150, 250], // props data passed down
        ],
        type: 'bar',
      }
    });
  }
  render() {
    return (
      <div id="chart">hello</div>
    );
  }
}

export default ChartComponent;
