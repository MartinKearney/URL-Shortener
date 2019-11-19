import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const OutputComponent = ({ outputUrl }) => {
  return (
    <div>
      <input type='text' rows='1' cols='50' value={outputUrl} readOnly />
      <CopyToClipboard text={outputUrl}>
        <button className='btn btn-dark'>Copy to clipboard</button>
      </CopyToClipboard>
    </div>
  );
};

export default OutputComponent;
