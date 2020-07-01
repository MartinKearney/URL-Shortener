import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Instruction from './Instruction';

const OutputComponent = ({ outputUrl }) => {
  return (
    <div>
      <h4 className='instruction'>Your shortened link will appear below</h4>
      <div className='form-group mb-0'>
        <input
          type='text'
          className='form-control border border-dark w-50 mx-auto my-4'
          value={outputUrl}
          readOnly
        />
        <Instruction
          step={3}
          text={
            'Copy the shortened link to your clipboard by clicking the button below'
          }
        />
        <div className='text-center'>
          <CopyToClipboard text={outputUrl}>
            <button
              className='btn btn-dark w-25 my-4'
              style={{ minWidth: '8rem' }}
            >
              Copy to Clipboard
            </button>
          </CopyToClipboard>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <Instruction step={4} text={'Go paste!'} />
        </div>
      </div>
    </div>
  );
};

export default OutputComponent;
