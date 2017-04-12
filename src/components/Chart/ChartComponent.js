import React, { Component } from 'react';
import c3 from 'c3';
// import styles from './ChartComponent.css';

class ChartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['bubble numbers'],
    };
  }

  componentDidMount() {
    this.updateChart(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.updateChart(this.props);
    }
  }

  updateChart(props) {
    if (this.state.data.length > 1) {
      const firstIndex = this.state.data.slice(0, 1);
      this.setState({ data: firstIndex.concat(props.data) });
    } else {
      this.setState({ data: this.state.data.concat(props.data) });
    }

    c3.generate({
      bindTo: '#chart',
      data: {
        columns: [
          this.state.data,
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
