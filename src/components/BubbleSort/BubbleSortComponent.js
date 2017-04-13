import React, { Component } from 'react';
import { ChartComponent } from '../../components';
import styles from './BubbleSortComponent.css';

class BubbleSortComponent extends Component {
  constructor(props) {
    super(props);
    this.receiveEventSource = this.receiveEventSource.bind(this);
    this.state = {
      data: ['bubble numbers', 12, 34, 82, 98, 76, 53, 1, 49, 22, 61, 5],
    };
  }

  componentDidMount() {
    this.receiveEventSource();
  }

  receiveEventSource() {
    if (!!window.EventSource) {
      const source = new EventSource('/api/bubble-sort');
      source.onmessage = (e) => {
        const data = JSON.parse(e.data);
        const firstIndex = this.state.data.slice(0, 1);
        this.setState({ data: firstIndex.concat(data) });
      };

      source.onopen = () => {
        console.log('connected!');
      };

      source.onerror = (e) => {
        if (e.target.readyState === EventSource.CLOSED) {
          console.log('closed');
        } else if (e.target.readyState === EventSource.CONNECTING) {
          console.log('trying to connect');
        }
      };
    } else {
      console.log("Your browser doesn't support SSE");
    }
  }

  render() {
    const { data } = this.state
    return (
      <div className={styles.container}>
        <h1>Bubble Sort</h1>
        <ChartComponent
          data={data}
        />
      </div>
    );
  }
}

export default BubbleSortComponent;
