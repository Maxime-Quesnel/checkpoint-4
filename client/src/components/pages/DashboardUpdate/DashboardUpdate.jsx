import React, { Component } from 'react';
import axios from 'axios';

import NavigationAdmin from '../../elements/NavigationAdmin/NavigationAdmin';
import './DashboardUpdate.scss';

class DashboardUpdate extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      phone: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone
    };

    axios.post('http://localhost:8000/api/users/updateUser', post).then(_ => {
      alert('modifié avec succes');
      window.location.reload();
    });
  };
  render() {
    return (
      <div className='dashboardUpdateContainer__globalContainer'>
        <NavigationAdmin />
        <div className='formUpdate__globalContainer'>
          <div className='formUpdate__containerForm'>
            <form
              noValidate
              className='formUpdate__container'
              onSubmit={this.onSubmit}
            >
              <span className='formUpdate__label'>
                <input
                  id='firstname'
                  onChange={this.onChange}
                  className='formUpdate__input'
                  type='text'
                  name='firstname'
                />
                <label className='formUpdate__labelEffect' htmlFor='firstname'>
                  firstname
                </label>
              </span>

              <span className='formUpdate__label'>
                <input
                  id='lastname'
                  onChange={this.onChange}
                  className='formUpdate__input'
                  type='text'
                  name='lastname'
                />
                <label className='formUpdate__labelEffect' htmlFor='lastname'>
                  lastname
                </label>
              </span>

              <span className='formUpdate__label'>
                <input
                  id='phone'
                  onChange={this.onChange}
                  className='formUpdate__input'
                  type='text'
                  name='phone'
                />
                <label className='formUpdate__labelEffect' htmlFor='phone'>
                  phone
                </label>
              </span>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '50px'
                }}
              >
                <button type='submit' className='formUpdate__btn'>
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardUpdate;
