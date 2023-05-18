import { PayloadAction } from "@reduxjs/toolkit";
import { signUserUp, signUserUpFailed } from "actions/auth";
import { getIdToken, signUp } from "api/auth";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AuthenticateUserActionPayload } from "types/auth";
import { isFirebaseError } from "utils/types";

function* signUpUser(action: PayloadAction<AuthenticateUserActionPayload>): Generator {
  const { payload } = action;
  const { email, password } = payload;
  try {
    yield call(signUp, { email, password });
    const idToken = yield call(getIdToken);
    // TODO pass idToken to API endpoint
  } catch (e) {
    if (isFirebaseError(e)) {
      console.error(e.code); // TODO handle according to https://firebase.google.com/docs/auth/admin/errors
    } else {
      console.error(e); // TODO
    }

    yield put(signUserUpFailed);
  }
}

function* onSignUserUP(): Generator {
  yield takeLatest(signUserUp.type, signUpUser);
}

function* signUpSaga(): Generator {
  yield all([onSignUserUP()]);
}

export default signUpSaga;
