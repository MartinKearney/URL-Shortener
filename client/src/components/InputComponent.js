import React, { useState } from 'react';
import Instruction from './Instruction';

const InputComponent = ({ clear, createUrl }) => {
  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onClear = () => {
    setText('');
    clear();
  };

  const onSubmit = e => {
    e.preventDefault();
    createUrl(text);
  };

  return (
    <div>
      <Instruction
        step={1}
        text={'Enter the full link you wish to shorten into the box below'}
      />
      <form onSubmit={onSubmit} className='form-group mb-0'>
        <input
          type='text'
          className='form-control border border-dark my-4 w-75 mx-auto'
          name='text'
          placeholder='Enter URL...'
          value={text}
          onChange={onChange}
        />
        <Instruction
          step={2}
          text={
            "Click the 'Create Short URL' button below to create your shortened link"
          }
        />
        <h5 style={{ margin: '0.5rem 0 0' }}>
          &#40;or click 'Clear' at any time to reset this form&#41;
        </h5>
        <div className='row'>
          <div className='mx-auto mt-4 mb-2'>
            <input
              type='submit'
              value='Create Short URL'
              className='btn btn-dark mx-2 pl-5 pr-5'
            />
            <button
              type='button'
              onClick={onClear}
              className='btn btn-danger mx-2 pl-4 pr-4'
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputComponent;
