import { signUserOut, signUserOutFailed } from "actions/auth";
import { signOut } from "api/auth";
import { all, call, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";

function* signOutUser(): Generator {
  try {
    yield call(signOut);
  } catch (e) {
    console.error(e); // TODO
    yield put(signUserOutFailed);
  }
}

function* onSignUserOut(): Generator {
  yield takeLatest(signUserOut.type, signOutUser);
}

function* signOutSaga(): Generator {
  yield all([onSignUserOut()]);
}

export default signOutSaga;
