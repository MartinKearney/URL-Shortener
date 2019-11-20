import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const OutputComponent = ({ outputUrl }) => {
  return (
    <div className='form-group'>
      <input
        type='text'
        className='form-control border border-dark w-50 m-auto'
        value={outputUrl}
        readOnly
      />

      <div className='text-center'>
        <CopyToClipboard text={outputUrl}>
          <button className='btn btn-dark w-25 m-2'>Copy to Clipboard</button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default OutputComponent;
