import React, { Component } from 'react';
import styles from './QuickSortComponent.css';

class QuickSortComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  render() {
    return (
      <div className={styles.container}></div>
    );
  }
}

export default QuickSortComponent;
