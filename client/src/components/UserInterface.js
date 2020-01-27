import React, { Fragment } from 'react';
import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';

const UserInterface = ({ createUrl, outputUrl, clear }) => {
  return (
    <div className='ui-container'>
      <div className='form-group mb-0'>
        <InputComponent createUrl={createUrl} clear={clear} />
      </div>
      <div className='form-group mb-0'>
        <OutputComponent outputUrl={outputUrl} />
      </div>
    </div>
  );
};

export default UserInterface;
