import { PayloadAction } from "@reduxjs/toolkit";
import { signUserIn, signUserInFailed } from "actions/auth";
import { signIn } from "api/auth";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { SignUserInActionPayload } from "types/auth";

function* signInUser(action: PayloadAction<SignUserInActionPayload>) {
  const { payload } = action;
  const { email, password } = payload;
  try {
    yield call(signIn, { email, password });
  } catch (e) {
    console.error(e); // TODO
    yield put(signUserInFailed);
  }
}

function* onSignUserIn() {
  yield takeLatest(signUserIn.type, signInUser);
}

function* signInSaga() {
  yield all([onSignUserIn()]);
}

export default signInSaga;