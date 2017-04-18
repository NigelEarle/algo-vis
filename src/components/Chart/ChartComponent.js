import React, { Component, PropTypes } from 'react';
import c3 from 'c3';
import styles from './ChartComponent.css';

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
    this.updateChart(nextProps.data);
  }

  updateChart(data) {
    const { chart } = this.state;
    chart.load({
      columns: [data],
    });
  }

  generateChart() {
    const { data } = this.props;
    const chart = c3.generate({
      bindTo: '#chart',
      data: {
        columns: [data],
        type: 'bar',
      }
    });
    this.setState({ chart });
  }
  render() {
    return (
      <div className={styles.container}>
        <div id="chart">hey buddy</div>
      </div>
    );
  }
}

ChartComponent.defaultProps = {
  data: [],
};

ChartComponent.propTypes = {
  data: PropTypes.arrays.isRequired
};

export default ChartComponent;
