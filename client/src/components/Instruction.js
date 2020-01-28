import React from 'react';

const Instruction = ({ step, text }) => {
  return (
    <div className='instruction'>
      <h3 className='instruction-heading'>Step {step}</h3>
      <h4>{text}</h4>
    </div>
  );
};

export default Instruction;
