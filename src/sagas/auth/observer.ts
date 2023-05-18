/* eslint-disable @typescript-eslint/no-explicit-any */
import { signUserInFailed, signUserInSucceeded, signUserOutSucceeded } from "actions/auth";
import { User } from "firebase/auth";
import { EventChannel, eventChannel } from "redux-saga";
import { all, call, put, take } from "redux-saga/effects";
import { AuthUser } from "types/auth";

import { auth } from "../../../src/firebase";

function authStateChannel(): EventChannel<any> {
  return eventChannel((emit) => {
    const unsubscribe = auth.onAuthStateChanged(
      (doc) => emit({ doc }),
      (error) => emit({ error })
    );

    return unsubscribe;
  });
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function* onAuthStateChanged() {
  const channel: EventChannel<any> = yield call(authStateChannel);

  while (true) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { doc, error }: { doc: User; error: any } = yield take(channel); // TODO improve Error type?
    console.log("doc = ", doc);
    console.log("error = ", error);

    if (error) yield put(signUserInFailed()); // TODO pass & handle Error

    if (!doc || !doc.toJSON) {
      yield put(signUserOutSucceeded());
    } else {
      const { uid, displayName, photoURL, email, phoneNumber } = doc.toJSON() as AuthUser;
      const user = { uid, displayName, photoURL, email, phoneNumber };
      yield put(signUserInSucceeded(user));
    }
  }
}

function* observerSaga(): Generator {
  yield all([onAuthStateChanged()]);
}

export default observerSaga;
