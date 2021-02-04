import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../../../actions/auth.action';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email.toLowerCase(),
      password: this.state.password
    };

    this.props.loginUser(userData);
  };
  render() {
    return (
      <div className='login__globalContainer'>
        <div className='login__card'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '30px'
            }}
          >
            <p
              style={{ color: '#fc9243', fontWeight: 'bold', fontSize: '19px' }}
            >
              Admin
            </p>
            <p
              style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '19px' }}
            >
              Dashboard
            </p>
          </div>
          <form
            noValidate
            onSubmit={this.onSubmit}
            style={{ marginTop: '60px' }}
          >
            <input
              onChange={this.onChange}
              value={this.state.email}
              id='email'
              type='email'
              name='email'
              className='login__input'
              placeholder='Email'
              autoComplete='off'
              required
            />
            <input
              onChange={this.onChange}
              value={this.state.password}
              id='password'
              type='password'
              name='password'
              className='login__input'
              placeholder='Password'
              autoComplete='off'
              required
            />
            <div className='login__containerBtn'>
              <button type='submit' className='login__btn'>
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
