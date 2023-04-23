import { changePassword, changeUsername, signUserIn } from "actions/signIn";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSignInPassword, selectSignInUsername } from "selectors/signIn";

const SignIn = () => {
  const dispatch = useDispatch();

  const username = useSelector(selectSignInUsername);
  const password = useSelector(selectSignInPassword);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeUsername(e.target.value));
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changePassword(e.target.value));
  };
  const handleSubmitSignInForm = () => {
    dispatch(signUserIn(username, password));
  };

  return (
    <div>
      SignIn
      <input type="text" placeholder="username" value={username} onChange={handleUsernameChange} />
      <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
      <button type="button" onClick={handleSubmitSignInForm}>
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
