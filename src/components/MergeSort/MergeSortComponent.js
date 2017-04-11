import React, { Component } from 'react';
import styles from './MergeSortComponent.css';

class MergeSortComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  render() {
    return (
      <div className={styles.container}>Merge Sort</div>
    );
  }
}

export default MergeSortComponent;
