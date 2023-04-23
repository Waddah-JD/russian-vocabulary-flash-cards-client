import { signUserIn, signUserInFailed, signUserInSucceeded } from "actions/signIn";
import { signIn } from "api/auth";
import { call, put, takeLatest } from "redux-saga/effects";
import { SignInResult } from "types/auth";

function* signInUser() {
  try {
    const user: SignInResult = yield call(signIn);
    yield put(signUserInSucceeded(user));
  } catch (e) {
    yield put(signUserInFailed);
  }
}

function* signInSaga() {
  yield takeLatest(signUserIn.type, signInUser);
}

export default signInSaga;
