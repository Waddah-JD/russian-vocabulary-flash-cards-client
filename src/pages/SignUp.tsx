import { signUserUp } from "actions/auth";
import { changeEmail, changePassword } from "actions/signUp";
import EmailAndPassword from "components/Forms/EmailAndPassword";
import UnauthenticatedOnlyRouteLayout from "components/Layout/UnauthenticatedOnlyRouteLayout";
import { useDispatch, useSelector } from "react-redux";
import { selectSignUpEmail, selectSignUpPassword } from "selectors/signUp";

function SignUp(): JSX.Element {
  const dispatch = useDispatch();

  const email = useSelector(selectSignUpEmail);
  const password = useSelector(selectSignUpPassword);

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>): void {
    dispatch(changeEmail(e.target.value));
  }
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>): void {
    dispatch(changePassword(e.target.value));
  }
  function handleSubmitSignInForm(): void {
    dispatch(signUserUp({ email, password }));
  }

  return (
    <UnauthenticatedOnlyRouteLayout>
      <h2>Sign Up</h2>
      <EmailAndPassword
        email={email}
        handleEmailChange={handleEmailChange}
        password={password}
        handlePasswordChange={handlePasswordChange}
        handleSubmitForm={handleSubmitSignInForm}
        submitButtonLabel="Sign Up"
      />
    </UnauthenticatedOnlyRouteLayout>
  );
}

export default SignUp;
