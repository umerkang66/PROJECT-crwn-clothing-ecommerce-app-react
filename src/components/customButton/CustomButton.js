import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children, colorBlue, inverted, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${inverted ? 'inverted' : ''} ${
        colorBlue ? 'color-blue' : ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
