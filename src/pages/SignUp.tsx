import { signUp } from "api/auth";
import EmailAndPassword from "components/Forms/EmailAndPassword";
import UnauthenticatedOnlyRouteLayout from "components/Layout/UnauthenticatedOnlyRouteLayout";
import { useState } from "react";

function SignUp(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSetEmail(e: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(e.target.value);
  }
  function handleSetPassword(e: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value);
  }
  async function handleSignUp(): Promise<void> {
    await signUp(email, password);
  }
  return (
    <UnauthenticatedOnlyRouteLayout>
      <h2>Sign Up</h2>
      <EmailAndPassword
        email={email}
        handleEmailChange={handleSetEmail}
        password={password}
        handlePasswordChange={handleSetPassword}
        handleSubmitForm={handleSignUp}
        submitButtonLabel="Sign Up"
      />
    </UnauthenticatedOnlyRouteLayout>
  );
}

export default SignUp;
