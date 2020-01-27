import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
        <div>
          <h3 className='instruction-heading'>Step 3</h3>
          <h4 className='instruction'>
            Copy the shortened link to your clipboard by clicking the button
            below
          </h4>
        </div>
        <div className='text-center'>
          <CopyToClipboard text={outputUrl}>
            <button className='btn btn-dark w-25 my-4'>
              Copy to Clipboard
            </button>
          </CopyToClipboard>
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <h3 className='instruction-heading'>Step 4</h3>
          <h4 className='instruction'>Paste like there's no tomorrow!</h4>
        </div>
      </div>
    </div>
  );
};

export default OutputComponent;
