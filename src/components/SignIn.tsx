import { signUserIn } from "actions/auth";
import { changeEmail, changePassword } from "actions/signIn";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSignInEmail, selectSignInPassword } from "selectors/signIn";

function SignIn() {
  const dispatch = useDispatch();

  const email = useSelector(selectSignInEmail);
  const password = useSelector(selectSignInPassword);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEmail(e.target.value));
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changePassword(e.target.value));
  };
  const handleSubmitSignInForm = () => {
    dispatch(signUserIn({ email, password }));
  };

  return (
    <div>
      SignIn
      <input type="text" placeholder="email" value={email} onChange={handleEmailChange} />
      <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
      <button type="button" onClick={handleSubmitSignInForm}>
        Sign In
      </button>
    </div>
  );
}

export default SignIn;
