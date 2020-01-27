import React, { Component } from 'react';

class InputComponent extends Component {
  state = {
    text: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onClear = () => {
    this.setState({ text: '' });
    this.props.clear();
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.createUrl(this.state.text);
  };

  render() {
    return (
      <div>
        <h3 className='instruction-heading'>Step 1</h3>
        <h4 className='instruction'>
          Enter the full link you wish to shorten into the box below
        </h4>
        <form onSubmit={this.onSubmit} className='form-group mb-0'>
          <input
            type='text'
            className='form-control border border-dark my-4 w-75 mx-auto'
            name='text'
            placeholder='Enter URL...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <h3 className='instruction-heading'>Step 2</h3>
          <h4 className='instruction'>
            Click the 'Create Short URL' button below to create your shortened
            link
          </h4>
          <h5>&#40;or click 'Clear' at any time to reset this form&#41;</h5>
          <div className='row'>
            <div className='mx-auto mt-4 mb-2'>
              <input
                type='submit'
                value='Create Short URL'
                className='btn btn-dark mx-2 pl-5 pr-5'
              />
              <button
                type='button'
                onClick={this.onClear}
                className='btn btn-danger mx-2 pl-4 pr-4'
              >
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
