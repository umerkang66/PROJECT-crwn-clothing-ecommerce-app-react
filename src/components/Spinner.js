import React from 'react';
import '../sass/components/Spinner.scss';

// HIGHER ORDER COMPONENT
const Spinner = function (WrappedComponent) {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container" />
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
};

export default Spinner;
