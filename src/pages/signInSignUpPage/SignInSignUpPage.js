import React from 'react';
import './SignInSignUpPage.scss';

import SignIn from '../../components/signIn/SignIn.js';
import SignUp from '../../components/signUp/SignUp.js';

const SignInSignUpPage = props => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
