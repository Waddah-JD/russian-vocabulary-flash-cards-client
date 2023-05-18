import { signUserIn } from "actions/auth";
import { signInFormChangeEmail, signInFormChangePassword } from "actions/signIn";
import EmailAndPassword from "components/Forms/EmailAndPassword";
import UnauthenticatedOnlyRouteLayout from "components/Layout/UnauthenticatedOnlyRouteLayout";
import { useDispatch, useSelector } from "react-redux";
import { selectSignInEmail, selectSignInPassword } from "selectors/signIn";

function SignIn(): JSX.Element {
  const dispatch = useDispatch();

  const email = useSelector(selectSignInEmail);
  const password = useSelector(selectSignInPassword);

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>): void {
    dispatch(signInFormChangeEmail(e.target.value));
  }
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>): void {
    dispatch(signInFormChangePassword(e.target.value));
  }
  function handleSubmitSignInForm(): void {
    dispatch(signUserIn({ email, password }));
  }

  return (
    <UnauthenticatedOnlyRouteLayout>
      <h2>Sign In</h2>
      <EmailAndPassword
        email={email}
        handleEmailChange={handleEmailChange}
        password={password}
        handlePasswordChange={handlePasswordChange}
        handleSubmitForm={handleSubmitSignInForm}
        submitButtonLabel="Sign In"
      />
    </UnauthenticatedOnlyRouteLayout>
  );
}

export default SignIn;
