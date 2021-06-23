import React from 'react';
import '../sass/pagesSass/SignInSignUpPage.scss';

import SignIn from '../components/SignIn.js';
import SignUp from '../components/SignUp.js';

const SignInSignUpPage = props => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
