import React, { Component } from 'react';
import '../sass/components/SignIn.scss';
import googleIcon from '../assets/google-icon.png';

import { auth, signInWithGoogle } from '../firebase/firebase.js';
import FormInput from './FormInput.js';
import CustomButton from './CustomButton.js';

class SignIn extends Component {
  state = { email: '', password: '' };

  handleFormSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.error(err);
    }
  };

  handleFormChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleFormSubmit}>
          <FormInput
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            label="Email"
            required
            handleChange={this.handleFormChange}
          />
          <FormInput
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            label="Password"
            required
            handleChange={this.handleFormChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} colorBlue>
              <img className="blue-button__img" src={googleIcon} alt="" /> Sign
              in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
