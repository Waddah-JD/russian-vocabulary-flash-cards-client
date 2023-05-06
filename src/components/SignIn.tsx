import { signUserIn } from "actions/auth";
import { changeEmail, changePassword } from "actions/signIn";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSignInEmail, selectSignInPassword } from "selectors/signIn";

import UnauthenticatedOnlyRouteLayout from "./Layout/UnauthenticatedOnlyRouteLayout";

function SignIn() {
  const dispatch = useDispatch();

  const email = useSelector(selectSignInEmail);
  const password = useSelector(selectSignInPassword);

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeEmail(e.target.value));
  }
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changePassword(e.target.value));
  }
  function handleSubmitSignInForm() {
    dispatch(signUserIn({ email, password }));
  }

  return (
    <UnauthenticatedOnlyRouteLayout>
      SignIn
      <input type="text" placeholder="email" value={email} onChange={handleEmailChange} />
      <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
      <button type="button" onClick={handleSubmitSignInForm}>
        Sign In
      </button>
    </UnauthenticatedOnlyRouteLayout>
  );
}

export default SignIn;
