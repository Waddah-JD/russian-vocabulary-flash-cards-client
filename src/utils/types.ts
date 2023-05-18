import { FirebaseError } from "firebase/app";

export function isObject(e: unknown): e is object {
  return !!e && typeof e === "object";
}

export function isFirebaseError(e: unknown): e is FirebaseError {
  if (!isObject(e)) {
    return false;
  }

  // TODO are there more criteria that could help narrow down the Firebase error?
  return Object.hasOwn(e, "code");
}

export function isNil(e: unknown): boolean {
  return e === null || e === undefined;
}
