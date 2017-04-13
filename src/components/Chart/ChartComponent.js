import React, { Component } from 'react';
import c3 from 'c3';
// import styles from './ChartComponent.css';

class ChartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: null,
    };
  }

  componentDidMount() {
    this.generateChart();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.updateChart(this.props);
    }
  }

  updateChart(props) {
    const { chart } = this.state;
    chart.load({
      columns: [
        props.data,
      ],
    });
  }

  generateChart() {
    const chart = c3.generate({
      bindTo: '#chart',
      data: {
        columns: [
          this.props.data,
        ],
        type: 'bar',
      }
    });
    this.setState({ chart });
  }
  render() {
    return (
      <div id="chart">hey buddy</div>
    );
  }
}

export default ChartComponent;
