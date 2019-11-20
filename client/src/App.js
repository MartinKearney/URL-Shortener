import React, { Component } from 'react';
import axios from 'axios';
import UserInterface from './components/UserInterface';

import './App.css';

class App extends Component {
  state = {
    loading: false,
    outputUrl: ''
  };

  createUrl = async longUrl => {
    this.setState({ loading: true });
    console.log(longUrl);
    // hit shorten endpoint with longUrl as body
    const newUrl = await axios.post('/api/url/shorten', { longUrl: longUrl });
    console.log(newUrl.data.shortUrl);
    // update state
    this.setState({ outputUrl: newUrl.data.shortUrl, loading: false });
  };

  clearOutput = () => {
    this.setState({ outputUrl: '' });
  };

  render() {
    const { outputUrl } = this.state;
    return (
      <div>
        <div className='jumbotron'>
          <h1 className='display-3 text-center'>URL Shortener</h1>
        </div>
        <div className='container'>
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
