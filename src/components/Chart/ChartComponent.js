import React, { Component } from 'react';
import c3 from 'c3';
// import styles from './ChartComponent.css';

class ChartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['bubble numbers'],
      chart: null,
    };
  }

  componentWillMount() {
    // this.setState({
    //   data: this.state.data.concat(this.props.data)
    // });
    this.generateChart();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      // this.updateChart(this.props);
    }
  }

  updateChart(props) {
    if (this.state.data.length > 1) {
      const firstIndex = this.state.data.slice(0, 1);
      this.setState({ data: firstIndex.concat(props.data) });
    }
    console.log('this state in update: ', this.state);
    this.state.chart.load({
      bindTo: '#chart',
      data: {
        columns: [
          this.state.data,
        ],
        type: 'bar',
      }
    });
  }

  generateChart() {
    c3.generate({
      bindTo: '#chart',
      data: {
        columns: [
          this.props.data,
        ],
        type: 'bar',
      }
    });
    // this.setState({ chart });
  }
  render() {
    console.log('this state: ', this.state);
    return (
      <div id="chart">hey buddy</div>
    );
  }
}

export default ChartComponent;
