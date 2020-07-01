import React, { useState } from 'react';
import axios from 'axios';
import UserInterface from './components/UserInterface';
import Alert from './components/Alert';

import './App.css';

const App = () => {
  const [outputUrl, setOutputUrl] = useState('');
  const [alertText, setAlertText] = useState(null);

  const createUrl = async (longUrl) => {
    try {
      // hit shorten endpoint with longUrl as body
      const newUrl = await axios.post('/api/url/shorten', { longUrl: longUrl });
      setOutputUrl(newUrl.data.shortUrl);
    } catch (error) {
      // set an alert if e.g. a bad request is made
      setAlert();
    }
  };

  const clearOutput = () => {
    setOutputUrl('');
  };

  const setAlert = () => {
    setAlertText('Please enter a valid URL');
    // remove warning after 5 seconds
    setTimeout(() => setAlertText(null), 5000);
  };

  return (
    <div>
      <div className='title-container'>
        <p className='title-text'>URL Shortener</p>
      </div>
      <div className='container'>
        <Alert alertText={alertText} />
        <UserInterface
          createUrl={createUrl}
          outputUrl={outputUrl}
          clear={clearOutput}
        />
      </div>
    </div>
  );
};

export default App;
