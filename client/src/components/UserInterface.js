import React from 'react';
import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';

const UserInterface = ({ createUrl, outputUrl }) => {
  return (
    <div>
      <InputComponent createUrl={createUrl} />
      <OutputComponent outputUrl={outputUrl} />
    </div>
  );
};

export default UserInterface;
