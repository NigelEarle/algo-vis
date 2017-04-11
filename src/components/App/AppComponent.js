import React from 'react';
import PropTypes from 'prop-types';

const AppComponent = ({ children }) => (
  <div>
    { children }
  </div>
);

export default AppComponent;

AppComponent.defaultProps = {
  children: {},
};

AppComponent.propTypes = {
  children: PropTypes.any.isRequired, // eslint-disable-line
};
