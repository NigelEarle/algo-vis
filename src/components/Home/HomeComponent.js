import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './HomeComponent.css';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>Sorting Algorithm Visualization</h1>
        <div className={styles.link}>
          <Link to="/bubblesort">Bubble Sort</Link>
        </div>
        <div className={styles.link}>
          <Link to="/quicksort">Quick Sort</Link>
        </div>
        <div className={styles.link}>
          <Link to="/selectionsort">Selection Sort</Link>
        </div>
        <div className={styles.link}>
          <Link to="/insertionsort">Insertion Sort</Link>
        </div>
        <div className={styles.link}>
          <Link to="/mergesort">Merge Sort</Link>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
