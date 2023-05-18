import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as _signOut } from "firebase/auth";
import { AuthenticateUserActionPayload } from "types/auth";

import { auth } from "../../src/firebase";

export async function signIn(payload: AuthenticateUserActionPayload): Promise<void> {
  const { email, password } = payload;
  await signInWithEmailAndPassword(auth, email, password);
}

export async function signOut(): Promise<void> {
  await _signOut(auth);
}

export async function signUp(payload: AuthenticateUserActionPayload): Promise<void> {
  const { email, password } = payload;
  await createUserWithEmailAndPassword(auth, email, password);
}

export async function getIdToken(): Promise<string | undefined> {
  return await auth.currentUser?.getIdToken();
}
