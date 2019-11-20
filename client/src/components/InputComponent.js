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
        <form onSubmit={this.onSubmit} className='form-group'>
          <input
            type='text'
            className='form-control border border-dark'
            name='text'
            placeholder='Enter URL...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <div className='row'>
            <div className='mx-auto'>
              <input
                type='submit'
                value='Create URL'
                className='btn btn-dark m-2 pl-5 pr-5'
              />
              <button type='button' className='btn btn-danger m-2 pl-4 pr-4'>
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default InputComponent;