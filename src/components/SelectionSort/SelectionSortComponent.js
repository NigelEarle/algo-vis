import React, { Component } from 'react';
import styles from './SelectionSortComponent.css';

class SelectionSortComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  render() {
    return (
      <div className={styles.container}>Selection sort</div>
    );
  }
}

export default SelectionSortComponent;
