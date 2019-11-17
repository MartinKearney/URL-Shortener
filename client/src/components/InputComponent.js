import React, { Component } from 'react';

class InputComponent extends Component {
  state = {
    text: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.createUrl(this.state.text);
    // if (this.state.text === '') {
    //   this.props.setAlert('Please enter something', 'light');
    // } else {
    //   this.props.createUrl(this.state.text);
    //   this.setState({ text: '' });
    // }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Enter URL...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Create URL'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default InputComponent;
