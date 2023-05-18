import { all } from "redux-saga/effects";

import authSaga from "./auth";

function* rootSaga(): Generator {
  yield all([authSaga()]);
}

export default rootSaga;
