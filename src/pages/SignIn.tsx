import { signUserIn } from "actions/auth";
import { changeEmail, changePassword } from "actions/signIn";
import EmailAndPassword from "components/Forms/EmailAndPassword";
import UnauthenticatedOnlyRouteLayout from "components/Layout/UnauthenticatedOnlyRouteLayout";
import { useDispatch, useSelector } from "react-redux";
import { selectSignInEmail, selectSignInPassword } from "selectors/signIn";

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
      <h2>Sign In</h2>
      <EmailAndPassword
        email={email}
        handleEmailChange={handleEmailChange}
        password={password}
        handlePasswordChange={handlePasswordChange}
        handleSubmitForm={handleSubmitSignInForm}
      />
    </UnauthenticatedOnlyRouteLayout>
  );
}

export default SignIn;
