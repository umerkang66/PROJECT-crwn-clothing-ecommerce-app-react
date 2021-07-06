import React from 'react';
import '../sass/components/ErrMessage.scss';

const ErrMessage = errMessage => {
  return <div className="err-message">⚠️ {errMessage}</div>;
};

export default ErrMessage;
