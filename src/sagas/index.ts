import { all } from "redux-saga/effects";

import authSaga from "./auth";
import learnWordsSagas from "./learn";

function* rootSaga(): Generator {
  yield all([authSaga(), learnWordsSagas()]);
}

export default rootSaga;
