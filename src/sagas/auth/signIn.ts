import { PayloadAction } from "@reduxjs/toolkit";
import { signUserIn, signUserInFailed } from "actions/auth";
import { signIn } from "api/auth";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AuthenticateUserActionPayload } from "types/auth";
import { isFirebaseError } from "utils/types";

function* signInUser(action: PayloadAction<AuthenticateUserActionPayload>): Generator {
  const { payload } = action;
  const { email, password } = payload;
  try {
    yield call(signIn, { email, password });
  } catch (e) {
    if (isFirebaseError(e)) {
      console.error(e.code); // TODO handle according to https://firebase.google.com/docs/auth/admin/errors
    } else {
      console.error(e); // TODO
    }

    yield put(signUserInFailed);
  }
}

function* onSignUserIn(): Generator {
  yield takeLatest(signUserIn.type, signInUser);
}

function* signInSaga(): Generator {
  yield all([onSignUserIn()]);
}

export default signInSaga;
