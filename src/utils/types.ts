import { FirebaseError } from "firebase/app";
import { ApiError } from "types/api";

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

function isNull(it: unknown): it is null {
  return typeof it === "object" && !it;
}

export function isNil(e: unknown): boolean {
  return e === null || e === undefined;
}

export function isNumericString(value: string): boolean {
  return /^\d+$/.test(value);
}

export function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === "object" &&
    !isNull(error) &&
    "response" in error &&
    typeof error.response === "object" &&
    !isNull(error.response) &&
    "data" in error.response
  );
}
