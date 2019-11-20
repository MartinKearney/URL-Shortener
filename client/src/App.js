import React, { Component } from 'react';
import axios from 'axios';
import UserInterface from './components/UserInterface';
import Alert from './components/Alert';

import './App.css';

class App extends Component {
  state = {
    outputUrl: '',
    alertText: null
  };

  createUrl = async longUrl => {
    try {
      // hit shorten endpoint with longUrl as body
      const newUrl = await axios.post('/api/url/shorten', { longUrl: longUrl });
      this.setState({ outputUrl: newUrl.data.shortUrl });
    } catch (error) {
      // set an alert if e.g. a bad request is made
      this.setAlert();
    }
  };

  clearOutput = () => {
    this.setState({ outputUrl: '' });
  };

  setAlert = () => {
    this.setState({ alertText: 'Please enter a valid URL' });
    // remove warning after 3 seconds
    setTimeout(() => this.setState({ alertText: null }), 3000);
  };

  render() {
    const { outputUrl, alertText } = this.state;
    return (
      <div>
        <div className='jumbotron'>
          <h1 className='display-3 text-center'>URL Shortener</h1>
        </div>
        <div className='container'>
          <Alert alertText={alertText} />
          <UserInterface
            createUrl={this.createUrl}
            outputUrl={outputUrl}
            clear={this.clearOutput}
          />
        </div>
      </div>
    );
  }
}

export default App;
