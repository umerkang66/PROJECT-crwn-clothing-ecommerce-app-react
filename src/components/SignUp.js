import React, { Component } from 'react';
import '../sass/components/SignUp.scss';

import { auth, createUserProfileDocument } from '../firebase/firebase.js';
import FormInput from './FormInput.js';
import CustomButton from './CustomButton.js';

class SignUp extends Component {
  state = { displayName: '', email: '', password: '', confirmPassword: '' };

  handleFormSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Passwords not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      // setting our state to initial stage
      this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    } catch (err) {
      console.error(err.message);
    }
  };

  handleFormChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleFormSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Display Name"
            onChange={this.handleFormChange}
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            onChange={this.handleFormChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            onChange={this.handleFormChange}
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            onChange={this.handleFormChange}
            required
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
