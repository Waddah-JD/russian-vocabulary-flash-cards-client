import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as _signOut,
  UserCredential,
} from "firebase/auth";

import { auth } from "../../src/firebase";

export async function signIn(email: string, password: string): Promise<void> {
  await signInWithEmailAndPassword(auth, email, password);
}

export async function signOut(): Promise<void> {
  await _signOut(auth);
}

export async function signUp(email: string, password: string): Promise<UserCredential> {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function getIdToken(): Promise<string | undefined> {
  return await auth.currentUser?.getIdToken();
}
