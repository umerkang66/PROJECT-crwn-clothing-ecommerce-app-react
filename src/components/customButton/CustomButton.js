import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children, colorBlue, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${colorBlue ? 'color-blue' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
