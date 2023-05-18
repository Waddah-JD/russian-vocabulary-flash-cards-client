import { PayloadAction } from "@reduxjs/toolkit";
import { fetchLearnWords, fetchLearnWordsFailed, fetchLearnWordsSucceeded } from "actions/words";
import { callLearnWordsApi } from "api/words";
import { all, call, CallEffect, put, PutEffect, takeLatest } from "redux-saga/effects";
import { Word } from "types/words";

function* fetchLearnWordsHandler(action: PayloadAction<number>): Generator<CallEffect | PutEffect, void, Word[]> {
  const { payload: batchSize } = action;

  try {
    const results = yield call(callLearnWordsApi, batchSize);
    yield put(fetchLearnWordsSucceeded(results));
  } catch (e) {
    // TODO

    yield put(fetchLearnWordsFailed);
  }
}

function* onFetchLearnWords(): Generator {
  yield takeLatest(fetchLearnWords.type, fetchLearnWordsHandler);
}

function* learnWordsSagas(): Generator {
  yield all([onFetchLearnWords()]);
}

export default learnWordsSagas;
