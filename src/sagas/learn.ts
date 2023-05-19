import { PayloadAction } from "@reduxjs/toolkit";
import {
  addToCollectionNoteFormValueSubmitted,
  fetchLearnWords,
  fetchLearnWordsFailed,
  fetchLearnWordsSucceeded,
} from "actions/words";
import { callAddWordToUserCollectionApi } from "api/user-words";
import { callLearnWordsApi } from "api/words";
import { all, call, CallEffect, put, PutEffect, takeLatest } from "redux-saga/effects";
import { Word } from "types/words";

function* submitAddToCollectionNote(
  action: PayloadAction<{ id: Word["id"]; note: string }>
): Generator<CallEffect<void>, void, unknown> {
  const { id, note } = action.payload;
  try {
    yield call(callAddWordToUserCollectionApi, id, note);
  } catch (error) {
    console.log(error);
  }
}

function* onSubmitAddToCollectionNote(): Generator {
  yield takeLatest(addToCollectionNoteFormValueSubmitted.type, submitAddToCollectionNote);
}

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
  yield all([onFetchLearnWords(), onSubmitAddToCollectionNote()]);
}

export default learnWordsSagas;
