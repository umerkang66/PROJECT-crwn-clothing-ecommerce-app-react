import React from 'react';
import '../sass/pages/SignInSignUpPage.scss';

import SignIn from '../components/SignIn.js';
import SignUp from '../components/SignUp.js';

const SignInSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
