import React, { Component } from 'react';

import styles from './HomeComponent.css';
import {
  ChartComponent,
  ButtonComponent,
} from '../../components';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.receiveStream = this.receiveStream.bind(this);
    this.state = {
      algorithms: ['bubble-sort', 'insertion-sort', 'merge-sort', 'quick-sort', 'selection-sort'],
      data: ['numbers', 12, 34, 82, 98, 76, 53, 1, 49, 22, 61, 5],
    };
  }

  receiveStream(value) {
    if (!!window.EventSource) {
      const source = new EventSource(`/api/${value}`);
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
    const { data, algorithms } = this.state;
    return (
      <div className={styles.container}>
        <h1>Sorting Algorithm Visualization</h1>
        { algorithms.map(curr => (
          <ButtonComponent
            key={curr}
            data={curr}
            receiveStream={this.receiveStream}
          />
          ))
        }
        <ChartComponent
          data={data}
        />
      </div>
    );
  }
}

export default HomeComponent;
