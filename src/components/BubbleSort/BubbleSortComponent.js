import React, { Component } from 'react';
import { ChartComponent } from '../../components';
import styles from './BubbleSortComponent.css';

class BubbleSortComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <ChartComponent />
      </div>
    );
  }
}

export default BubbleSortComponent;
