import React from 'react';
import Spinner from './Spinner.js';

// HIGHER ORDER COMPONENT
const WithSpinner = function (WrappedComponent) {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };
};

export default WithSpinner;
