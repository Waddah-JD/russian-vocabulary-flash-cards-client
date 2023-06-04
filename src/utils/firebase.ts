import { EmailAndPasswordFormErrorMessages } from "types/auth";

import { isFirebaseError } from "./types";

export function mapFirebaseErrorToErrorMessage(error: unknown): EmailAndPasswordFormErrorMessages {
  const DEFAULT_ERROR_MESSAGE = {
    title: "UNKNOWN ERROR!",
    description: "An unknown error has happened, please try again later!",
  };

  const errorIsThrownByFirebaseAuth = isFirebaseError(error);
  if (!errorIsThrownByFirebaseAuth) return DEFAULT_ERROR_MESSAGE;

  switch (error.code) {
    case "auth/user-not-found":
      return {
        title: "User Doesn't Exist",
        description: "There is no existing user record corresponding to the provided email",
      };
    case "auth/email-already-exists":
      return {
        title: "Email Already Exists",
        description: "The provided email is already in use by an existing user, please use another one",
      };
    case "auth/invalid-password":
      return {
        title: "Invalid Password",
        description: "The provided value for the password is invalid. It must be a string with at least six characters",
      };
    case "auth/weak-password":
      return {
        title: "Weak Password",
        description: "The provided value for the password is weak. It must be at least six characters",
      };
    case "auth/invalid-email":
      return {
        title: "Invalid Email",
        description: "The provided value for the email is invalid",
      };

    default:
      return DEFAULT_ERROR_MESSAGE;
  }
}
