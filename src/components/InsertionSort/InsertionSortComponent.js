import React, { Component } from 'react';
import styles from './InsertionSortComponent.css';

class InsertionSortComponent extends Component {
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

export default InsertionSortComponent;