import React, { Component } from 'react';
import { ChartComponent } from '../../components';
import styles from './BubbleSortComponent.css';

class BubbleSortComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    if (!!window.EventSource) {
      const source = new EventSource('/api/bubble-sort');
      source.onmessage = (e) => {
        const data = JSON.parse(e.data);
        this.setState({ data });
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
    return (
      <div className={styles.container}>
        <h1>Bubble Sort</h1>
        <ChartComponent
          data={this.state.data}
        />
      </div>
    );
  }
}

export default BubbleSortComponent;
