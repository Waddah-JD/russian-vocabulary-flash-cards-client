import { getIdToken, signUp } from "api/auth";
import { createUser } from "api/users";
import EmailAndPassword from "components/Forms/EmailAndPassword";
import UnauthenticatedOnlyRouteLayout from "components/Layout/UnauthenticatedOnlyRouteLayout";
import { useState } from "react";
import { mapFirebaseErrorToErrorMessage } from "utils/firebase";

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
    const token = await getIdToken();
    if (!token) throw new Error("ID token is missing"); // this will never be triggered, hopefully
    await createUser(token);
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
        errorHandlerFn={mapFirebaseErrorToErrorMessage}
      />
    </UnauthenticatedOnlyRouteLayout>
  );
}

export default SignUp;
