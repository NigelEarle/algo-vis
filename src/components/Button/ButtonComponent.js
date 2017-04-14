import React, { Component, PropTypes } from 'react';
import styles from './ButtonComponent.css';

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.getName = this.getName.bind(this);
  }

  getName(event) {
    const { receiveStream } = this.props;
    receiveStream(event.target.innerHTML); // bad practice using innerHTML / must refactor
  }

  render() {
    const { data } = this.props;
    return (
      <div className={styles.container}>
        <button onClick={this.getName} className={styles.button}>{data}</button>
      </div>
    );
  }
}

ButtonComponent.defaultProps = {
  data: '',
  receiveStream: () => {},
};

ButtonComponent.propTypes = {
  data: PropTypes.string.isRequired,
  receiveStream: PropTypes.func.isRequired,
};

export default ButtonComponent;
