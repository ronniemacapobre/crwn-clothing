import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in' onSubmit={this.handleSubmit}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
          <FormInput
            name='email'
            value={this.state.email}
            required
            label='email'
            type='email'
            handleChange={this.handleChange}
          />
          <FormInput
            name='password'
            value={this.state.password}
            required
            label='password'
            handleChange={this.handleChange}
            type='password'
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {' '}
              Sign in with Google{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
