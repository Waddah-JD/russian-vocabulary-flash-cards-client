import { signInWithEmailAndPassword, signOut as _signOut } from "firebase/auth";
import { SignUserInActionPayload } from "types/auth";

import { auth } from "../../src/firebase";

export const signIn = async (payload: SignUserInActionPayload) => {
  const { email, password } = payload;
  console.log("email = ", email);
  console.log("password = ", password);
  await signInWithEmailAndPassword(auth, email, password);
};

export async function signOut() {
  await _signOut(auth);
}
