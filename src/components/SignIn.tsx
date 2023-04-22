import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSignInPassword, selectSignInUsername } from "selectors/signIn";
import signInSlice from "slices/signIn";

const SignIn = () => {
  const dispatch = useDispatch();

  const username = useSelector(selectSignInUsername);
  const password = useSelector(selectSignInPassword);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(signInSlice.actions.changeUsername(e.target.value));
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(signInSlice.actions.changePassword(e.target.value));
  };

  return (
    <div>
      SignIn
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
      />
    </div>
  );
};

export default SignIn;
