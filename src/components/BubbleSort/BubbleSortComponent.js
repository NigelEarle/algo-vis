import React, { Component } from 'react';
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
      <div className={styles.container}>BubbleSort</div>
    );
  }
}

export default BubbleSortComponent;
