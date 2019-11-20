import React from 'react';

const Alert = ({ alertText }) => {
  return (
    alertText !== null && (
      <div className='alert alert-warning text-center w-50 mx-auto'>
        {alertText}
      </div>
    )
  );
};

export default Alert;
