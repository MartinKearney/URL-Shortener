import React, { Fragment } from 'react';
import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';

const UserInterface = ({ createUrl, outputUrl }) => {
  return (
    <Fragment>
      <div className='form-group'>
        <InputComponent createUrl={createUrl} />
      </div>

      <div className='form-group'>
        <OutputComponent outputUrl={outputUrl} />
      </div>
    </Fragment>
  );
};

export default UserInterface;
