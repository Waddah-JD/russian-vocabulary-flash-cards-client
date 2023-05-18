import { createAction } from "@reduxjs/toolkit";
import { LearnWordsState } from "reducers/learn";

export const fetchLearnWords = createAction("WORDS/FETCH_LEARN_WORDS", (batchSize: LearnWordsState["batchSize"]) => {
  return { payload: batchSize };
});

export const fetchLearnWordsSucceeded = createAction(
  "WORDS/FETCH_LEARN_WORDS_SUCCEEDED",
  (results: LearnWordsState["results"]) => {
    return { payload: results };
  }
);

export const fetchLearnWordsFailed = createAction("WORDS/FETCH_LEARN_WORDS_FAILED");
