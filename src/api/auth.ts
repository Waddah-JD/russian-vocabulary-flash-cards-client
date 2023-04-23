import { SignInResult } from "types/auth";

function delay(timeout = 5000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, timeout);
  });
}

export async function signIn(): Promise<SignInResult> {
  await delay();
  return Promise.resolve({ id: "1", username: "waddah" });
}
