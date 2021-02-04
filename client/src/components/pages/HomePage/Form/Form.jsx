import React, { Component } from 'react';
import axios from 'axios';

import './Form.scss';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      contentText: '',
      location: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      username: this.state.username,
      contentText: this.state.contentText,
      location: this.state.location
    };

    axios.post('http://localhost:8000/api/testimonial/add', post).then(_ => {
      alert('ajouté avec success');
      window.location.reload();
    });
  };

  render() {
    return (
      <div className='form__globalContainer'>
        <div className='form__containerForm'>
          <form noValidate className='form__container' onSubmit={this.onSubmit}>
            <span className='form__label'>
              <input
                id='username'
                onChange={this.onChange}
                className='form__input'
                type='text'
                name='username'
              />
              <label className='form__labelEffect' for='username'>
                exemple: John Doe
              </label>
            </span>

            <span className='form__label'>
              <input
                id='location'
                onChange={this.onChange}
                className='form__input'
                type='text'
                name='location'
              />
              <label className='form__labelEffect' for='location'>
                exemple: France
              </label>
            </span>

            <span className='form__label' style={{ marginTop: '20px' }}>
              <textarea
                id='contentText'
                onChange={this.onChange}
                className='form__input'
                type='text'
                name='contentText'
              />
              <label className='form__labelEffect' for='contentText'>
                exemple: J'adore ce site !!!
              </label>
            </span>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px'
              }}
            >
              <button type='submit' className='form__btn'>
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
