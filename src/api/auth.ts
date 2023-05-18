import { signInWithEmailAndPassword, signOut as _signOut } from "firebase/auth";
import { SignUserInActionPayload } from "types/auth";

import { auth } from "../../src/firebase";

export async function signIn(payload: SignUserInActionPayload): Promise<void> {
  const { email, password } = payload;
  await signInWithEmailAndPassword(auth, email, password);
}

export async function signOut(): Promise<void> {
  await _signOut(auth);
}
