import { signIn } from "api/auth";
import EmailAndPassword from "components/Forms/EmailAndPassword";
import UnauthenticatedOnlyRouteLayout from "components/Layout/UnauthenticatedOnlyRouteLayout";
import { useState } from "react";

function SignIn(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSetEmail(e: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(e.target.value);
  }
  function handleSetPassword(e: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value);
  }
  async function handleSignIn(): Promise<void> {
    await signIn(email, password);
  }

  return (
    <UnauthenticatedOnlyRouteLayout>
      <h2>Sign In</h2>
      <EmailAndPassword
        email={email}
        handleEmailChange={handleSetEmail}
        password={password}
        handlePasswordChange={handleSetPassword}
        handleSubmitForm={handleSignIn}
        submitButtonLabel="Sign In"
      />
    </UnauthenticatedOnlyRouteLayout>
  );
}

export default SignIn;
