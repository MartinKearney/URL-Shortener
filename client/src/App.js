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

  render() {
    const { outputUrl } = this.state;
    return (
      <div>
        <h1>URL Shortener!</h1>
        <UserInterface createUrl={this.createUrl} outputUrl={outputUrl} />
      </div>
    );
  }
}

export default App;
